import { fetchAPI } from '../api/api'

// Every half hour from 17:00 to 23:30, the range the booking API uses.
export const allTimes = Array.from(
  { length: 14 },
  (_, i) => `${17 + Math.floor(i / 2)}:${i % 2 ? '30' : '00'}`,
)

// Available times for today, from the booking API.
export function initializeTimes() {
  return fetchAPI(new Date())
}

// Runs on dispatch when the date changes; action.date is 'YYYY-MM-DD'.
export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES' && action.date) {
    // 'T00:00' reads the date in local time; without it the browser uses UTC.
    return fetchAPI(new Date(`${action.date}T00:00`))
  }
  return state
}
