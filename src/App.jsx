import { ExternalLink } from 'lucide-react';

// Add new dashboards here as they come online \u2014 that's the only change
// needed for a new card to appear on the hub.
const DASHBOARDS = [
  {
    name: 'Install Project Dashboard',
    description: 'Completed installs tracking across 5 markets \u2014 UK, Ireland, Netherlands, Germany and Finland.',
    url: 'https://install-dashboard.vercel.app/',
    emoji: '\u{1F3D7}\u{FE0F}'
  },
  {
    name: 'SFK Tracking',
    description: 'Small Format Kiosk (Part Subway Funded) pipeline and phase breakdown by country.',
    url: 'https://sfktracking.vercel.app/',
    emoji: '\u{1F4E6}'
  },
  {
    name: 'Germany FreedomPay Migration',
    description: 'Worldline \u2192 FreedomPay payment migration tracker for the German store estate.',
    url: 'https://swdefp-swaps.vercel.app/',
    emoji: '\u{1F4B3}'
  },
  {
    name: 'PipelineBoard',
    description: 'A lean, KPI-focused offshoot of the Install Project Dashboard \u2014 tables and goals, no charts.',
    url: 'https://swpipeline-board.vercel.app/',
    emoji: '\u{1F4CB}'
  },
  {
    name: 'Install Status Tracker',
    description: 'Twice-weekly burndown call prep \u2014 upcoming installs by week, readiness form status, and resourcing.',
    url: 'https://install-status-tracker.vercel.app/',
    emoji: '\u{2705}'
  }
];

function DashboardCard({ name, description, url, emoji }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group border border-border rounded-lg p-6 bg-[hsl(var(--surface-1))] hover:border-primary hover:bg-[hsl(var(--surface-2))] transition-colors flex flex-col gap-3"
    >
      <div className="flex items-start justify-between">
        <div className="text-4xl leading-none">{emoji}</div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
}

function ComingSoonCard() {
  return (
    <div className="border border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-center min-h-[160px]">
      <div className="text-2xl">➕</div>
      <p className="text-sm text-muted-foreground">More dashboards coming soon</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <img src="/Vita Mojo_Primary_Dark.png" alt="Vita Mojo" className="h-8 w-auto" />
          <div className="h-8 w-px bg-border" />
          <img src="/Subway.png" alt="Subway" className="h-8 w-auto" />
          <div className="h-8 w-px bg-border" />
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Subway Programme Dashboards</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-sm text-muted-foreground mb-8">
          Select a dashboard below — each opens in a new tab.
        </p>
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {DASHBOARDS.map((d) => (
            <DashboardCard key={d.url} {...d} />
          ))}
          <ComingSoonCard />
        </div>
      </main>
    </div>
  );
}
