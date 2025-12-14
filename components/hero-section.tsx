import { HeroBackground } from "./hero-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-balance">Sahand Soleimani</h1>
        <p className="text-lg md:text-xl text-muted-foreground font-mono">Developer / Creator / Student</p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
