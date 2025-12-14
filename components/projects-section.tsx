import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and modern technologies.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description: "An innovative solution for real-time data visualization and analytics.",
    tags: ["React", "D3.js", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description: "Mobile-first design system with comprehensive component library.",
    tags: ["React Native", "Expo", "Storybook"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Four",
    description: "AI-powered tool for automating developer workflows and productivity.",
    tags: ["Python", "OpenAI", "FastAPI"],
    github: "#",
    live: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-border rounded-lg p-8 hover:border-foreground/20 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs font-mono px-3 py-1 bg-secondary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
