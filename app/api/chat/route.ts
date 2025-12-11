// Minimal JSON helper to avoid depending on NextResponse types
function json(data: unknown, init?: ResponseInit) {
  const headers = new Headers(init?.headers)
  if (!headers.has('content-type')) headers.set('content-type', 'application/json')
  return new Response(JSON.stringify(data), { ...init, headers })
}

// Simple ChatGPT proxy route for the App Router
// Usage: POST /api/chat with JSON { messages: [{ role: 'user'|'system'|'assistant', content: string }], model?, temperature?, max_tokens?, top_p?, user?, response_format? }
// Requires: set OPENAI_API_KEY in your environment (e.g., .env.local)

export async function POST(req: Request) {
  try {
    const apiKey = (globalThis as any)?.process?.env?.OPENAI_API_KEY as string | undefined
    if (!apiKey) {
      return json(
        { error: 'Server misconfiguration: OPENAI_API_KEY is not set.' },
        { status: 500 }
      )
    }

    const body = (await req.json().catch(() => ({}))) as {
      messages?: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
      model?: string
      temperature?: number
      max_tokens?: number
      top_p?: number
      user?: string
      response_format?: unknown
    }

    const {
      messages,
      model = 'gpt-4o-mini',
      temperature = 0.7,
      max_tokens,
      top_p,
      user,
      response_format,
    } = body || {}

    if (!Array.isArray(messages) || messages.length === 0) {
      return json(
        { error: "Invalid body. Expecting { messages: { role, content }[] }" },
        { status: 400 }
      )
    }

    const payload: Record<string, any> = {
      model,
      messages,
      temperature,
    }
    if (typeof max_tokens === 'number') payload.max_tokens = max_tokens
    if (typeof top_p === 'number') payload.top_p = top_p
    if (typeof user === 'string') payload.user = user
    if (response_format) payload.response_format = response_format

    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await upstream.json()

    if (!upstream.ok) {
      return json(
        { error: data?.error || 'OpenAI API error' },
        { status: upstream.status }
      )
    }

    // Return a concise, useful result while preserving original choices for flexibility
    return json({
      id: data.id,
      created: data.created,
      model: data.model,
      usage: data.usage,
      message: data.choices?.[0]?.message,
      choices: data.choices,
    })
  } catch (err) {
    console.error('API /api/chat error:', err)
    return json(
      { error: 'Unexpected server error' },
      { status: 500 }
    )
  }
}
