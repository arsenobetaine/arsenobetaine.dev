import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-sm font-medium">{"<dev />"}</div>
        <nav className="flex items-center gap-8">
          <a href="#projects" className="text-sm hover:text-muted-foreground transition-colors">
            Projects
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
