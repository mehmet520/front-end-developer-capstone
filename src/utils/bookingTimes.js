// Times a table can be booked. The API replaces this list in step 3.7.
export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}

// For now the available times do not depend on the selected date.
export function updateTimes(state) {
  return state
}
