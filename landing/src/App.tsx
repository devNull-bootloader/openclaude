import { Cpu, Github, Layers, Terminal, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Layers,
    title: "Project Awareness",
    description:
      "Automatically detects your workspace and context so each response understands your local project reality.",
  },
  {
    icon: Cpu,
    title: "Provider Flexibility",
    description:
      "Supports OpenAI (GPT-4/5), Anthropic, and local runtimes with seamless model switching.",
  },
  {
    icon: Terminal,
    title: "Integrated Terminal",
    description:
      "Launch workflows directly from your current working directory without breaking flow.",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--oc-bg)] text-[var(--oc-text)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 cyber-grid" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,140,0,0.14),transparent_45%),radial-gradient(circle_at_85%_5%,rgba(255,140,0,0.07),transparent_42%)]"
      />

      <main className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10">
        <header className="dashboard-card grid gap-10 p-6 md:grid-cols-[1.2fr_1fr] md:p-10">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--oc-text-dim)]">
              Open-Source CLI
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-[0.02em] md:text-5xl">
              The Project-Aware AI Companion for Your Local Workflow.
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--oc-text-dim)] md:text-lg">
              Context-rich, developer-first, and fully open-source. OpenClaude bridges the gap between your local
              files and LLM intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                className="amber-button"
                href="https://github.com/Gitlawb/openclaude"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                Download on GitHub
              </a>
              <a
                className="ghost-button"
                href="https://github.com/Gitlawb/openclaude#readme"
                target="_blank"
                rel="noreferrer"
              >
                View Documentation.
              </a>
            </div>
          </div>

          <div className="dashboard-card bg-[linear-gradient(180deg,rgba(32,23,18,0.88),rgba(18,14,11,0.95))] p-5">
            <div className="mb-4 flex items-center justify-between border-b border-[var(--oc-border)] pb-3 text-xs uppercase tracking-[0.2em] text-[var(--oc-text-dim)]">
              <span>Command Relay</span>
              <span className="status-pill animate-soft-pulse">Linked</span>
            </div>
            <div className="space-y-2 font-mono text-sm text-[var(--oc-text-dim)]">
              <p>
                <span className="terminal-prompt">$</span> openclaude --status
              </p>
              <p>workspace: /workspaces/openclaude</p>
              <p>context: synchronized</p>
              <p>
                <span className="terminal-prompt">$</span> awaiting task...
              </p>
            </div>
          </div>
        </header>

        <section className="mt-14 md:mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">Command Center</h2>
            <span className="hidden text-xs uppercase tracking-[0.28em] text-[var(--oc-text-dim)] md:block">
              Modular Intelligence
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="dashboard-card group p-5 md:p-6">
                  <div className="mb-4 inline-flex rounded-lg border border-[var(--oc-border)] bg-black/20 p-2 text-[var(--oc-accent)] transition-colors duration-200 group-hover:border-[var(--oc-accent)]/60">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--oc-text-dim)]">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-14 md:mt-16">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">Live Status</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--oc-text-dim)] md:text-base">
              A preview of the OpenClaude Control Center with runtime health and provider routing visible at a glance.
            </p>
          </div>

          <div className="dashboard-card mx-auto max-w-4xl overflow-hidden p-0">
            <div className="flex items-center justify-between border-b border-[var(--oc-border)] bg-[linear-gradient(90deg,rgba(32,23,18,0.9),rgba(19,14,11,0.96))] px-4 py-3 text-xs uppercase tracking-[0.22em] text-[var(--oc-text-dim)]">
              <span>OpenClaude Control Center</span>
              <span className="status-pill">online</span>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-[1.2fr_0.8fr] md:p-6">
              <div className="rounded-[12px] border border-dashed border-[var(--oc-border)] bg-black/25 p-4 font-mono text-sm text-[var(--oc-text-dim)]">
                <p className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span>openclaude --status</span>
                </p>
                <p className="terminal-line">
                  <span className="terminal-prompt">&gt;</span>
                  <span>runtime: active</span>
                </p>
                <p className="terminal-line">
                  <span className="terminal-prompt">&gt;</span>
                  <span>provider: openai</span>
                </p>
                <p className="terminal-line">
                  <span className="terminal-prompt">&gt;</span>
                  <span>project: indexed (124 files)</span>
                </p>
                <p className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span>ready for command input</span>
                </p>
              </div>

              <div className="flex flex-col justify-between gap-3">
                <div className="dashboard-card p-4">
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[var(--oc-text-dim)]">Session Health</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="status-pill">Runtime: Active</span>
                    <span className="status-pill">Provider: OpenAI</span>
                  </div>
                </div>

                <div className="dashboard-card p-4">
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[var(--oc-text-dim)]">Pipeline</p>
                  <p className="text-sm text-[var(--oc-text-dim)]">{"Workspace Context -> Router -> Tool Chain -> LLM Completion"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 md:mt-16">
          <div className="dashboard-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">Installation</h2>
            <p className="mt-3 text-sm text-[var(--oc-text-dim)] md:text-base">
              Install globally and launch OpenClaude from any terminal.
            </p>
            <pre className="mt-5 overflow-x-auto rounded-[12px] border border-[var(--oc-border)] bg-[#0A0908] p-4 text-sm text-[var(--oc-accent)] md:text-base">
              <code>npm install -g @gitlawb/openclaude</code>
            </pre>
          </div>
        </section>

        <footer className="mt-14 border-t border-[var(--oc-border)] pt-6 md:mt-16">
          <div className="flex flex-col items-start justify-between gap-4 text-sm text-[var(--oc-text-dim)] md:flex-row md:items-center">
            <p>OpenClaude is open-source and built for local-first developer workflows.</p>
            <div className="flex flex-wrap gap-4">
              <a
                className="footer-link"
                href="https://github.com/Gitlawb/openclaude"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub Repository
              </a>
              <a
                className="footer-link"
                href="https://github.com/Gitlawb/openclaude/issues"
                target="_blank"
                rel="noreferrer"
              >
                Issue Tracker
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}