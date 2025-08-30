import React from 'react'
import { cn } from '../utils/cn'

const badgeColors = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  violet: 'bg-violet-50 text-violet-700 border-violet-200',
  green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  teal: 'bg-teal-50 text-teal-700 border-teal-200',
  orange: 'bg-orange-50 text-orange-700 border-orange-200',
  pink: 'bg-pink-50 text-pink-700 border-pink-200',
  yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
}

export default function SubjectCard({ name, count, years, color = 'blue', icon: Icon }) {
  return (
    <article className="card p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div
          className={cn('h-11 w-11 rounded-xl flex items-center justify-center', {
            'bg-blue-100 text-blue-700': color === 'blue',
            'bg-violet-100 text-violet-700': color === 'violet',
            'bg-emerald-100 text-emerald-700': color === 'green',
            'bg-teal-100 text-teal-700': color === 'teal',
            'bg-orange-100 text-orange-700': color === 'orange',
            'bg-pink-100 text-pink-700': color === 'pink',
            'bg-yellow-100 text-yellow-700': color === 'yellow',
          })}
        >
          {Icon ? <Icon className="h-6 w-6" /> : null}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-lg truncate">{name}</h3>
            <span className={cn('badge', badgeColors[color] || badgeColors.blue)}>
              <span className="hidden sm:inline">{count} papers</span>
              <span className="sm:hidden">{count}</span>
            </span>
          </div>
          <p className="text-sm text-subtle mt-1">Years: {years}</p>

          <div className="mt-4 flex items-center gap-3">
            <button className="px-3 py-1.5 text-sm rounded-lg bg-slate-900 text-white hover:opacity-90">View papers</button>
            <button className="px-3 py-1.5 text-sm rounded-lg border border-slate-300 hover:bg-slate-50">Solutions</button>
          </div>
        </div>
      </div>
    </article>
  )
}
