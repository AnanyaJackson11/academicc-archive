export function cn(...classes) {
  return classes
    .flatMap((c) =>
      typeof c === 'string' ? c : Object.entries(c).filter(([, v]) => !!v).map(([k]) => k)
    )
    .join(' ')
}
