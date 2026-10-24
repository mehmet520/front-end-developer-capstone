// Returns an error message for each invalid field; an empty object means the form is valid.
// Dates are 'YYYY-MM-DD' strings, so they can be compared as text.
export function validateBooking({ date, time, guests }, today) {
  const errors = {}

  if (!date) {
    errors.date = 'Please choose a date.'
  } else if (date < today) {
    errors.date = 'Please choose today or a later date.'
  }

  if (!time) {
    errors.time =
      'No tables are available on this date. Please choose another date.'
  }

  const count = Number(guests)
  if (!Number.isInteger(count) || count < 1 || count > 10) {
    errors.guests = 'Please enter between 1 and 10 guests.'
  }

  return errors
}
