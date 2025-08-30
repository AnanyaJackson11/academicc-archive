import React from 'react'

export default function StatsBar({ papers, subjects, years }) {
  const items = [
    { label: 'Total Question Papers', value: papers },
    { label: 'Subjects Available', value: subjects },
    { label: 'Years of Archives', value: years },
  ]

  return (
    <div className="card">
      <dl className="grid grid-cols-1 sm:grid-cols-3">
        {items.map((it, idx) => (
          <div key={it.label} className={`p-5 ${idx !== 0 ? 'border-t sm:border-t-0 sm:border-l' : ''} border-slate-100`}>
            <dt className="text-sm text-subtle">{it.label}</dt>
            <dd className="mt-1 text-2xl font-bold">{it.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
