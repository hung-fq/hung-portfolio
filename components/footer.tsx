export function Footer() {
  return (
    <footer className="border-t border-border/30 py-10">
      <div className="container mx-auto max-w-3xl px-6 md:px-8">
        <p className="text-center text-[12px] tracking-wide text-muted-foreground/70">
          © {new Date().getFullYear()} Hung Pham
        </p>
      </div>
    </footer>
  )
}
