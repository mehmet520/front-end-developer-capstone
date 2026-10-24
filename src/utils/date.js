// Formats a Date as 'YYYY-MM-DD' in local time, the format of <input type="date">.
export function toDateString(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

// Formats 'YYYY-MM-DD' for people, e.g. 'Friday, November 6, 2026'.
export function formatLongDate(dateString) {
  return new Date(`${dateString}T00:00`).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
