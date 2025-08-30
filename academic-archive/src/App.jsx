import React from 'react'
import { BookOpenCheck, Calculator, Beaker, Atom, Activity, Globe2, Languages, LineChart, Palette, Music2, Search } from 'lucide-react'
import { subjects } from './data/Subjects'
import SubjectCard from './components/SubjectCard'
import StatsBar from './components/StatsBar'

export default function App() {
  const [query, setQuery] = React.useState('')

  const filtered = subjects.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))

  const totals = {
    papers: subjects.reduce((sum, s) => sum + s.count, 0),
    subjects: subjects.length,
    years: '10+',
  }

  const iconMap = {
    Mathematics: Calculator,
    Physics: Atom,
    Chemistry: Beaker,
    Biology: Activity,
    Geography: Globe2,
    'English Literature': BookOpenCheck,
    'Foreign Languages': Languages,
    Economics: LineChart,
    'Art & Design': Palette,
    Music: Music2,
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="container-lg py-10 text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Academic Question Papers Archive</h1>
          <p className="text-subtle">Access previous year examination papers organized by subject</p>

          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search subjects (e.g., Physics, Economics)"
              className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 bg-white shadow-soft"
            />
          </div>
        </div>
      </header>

      <main className="container-lg py-8">
        <section>
          <h2 className="sr-only">Browse by Subject</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <SubjectCard key={s.name} icon={iconMap[s.name]} {...s} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <StatsBar papers={totals.papers} subjects={totals.subjects} years={totals.years} />
        </section>
      </main>

      <footer className="py-10" />
    </div>
  )
}
