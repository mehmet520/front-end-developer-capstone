import { useState } from 'react'
import { toDateString } from '../utils/date'
import { validateBooking } from '../utils/validateBooking'
import './BookingForm.css'

const occasions = ['Birthday', 'Engagement', 'Anniversary']

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  // Fields the user has left once; their errors are shown from then on.
  const [touched, setTouched] = useState({})
  const [submitError, setSubmitError] = useState('')

  // The date can change the list; fall back to the first time still available.
  const selectedTime = availableTimes.includes(time)
    ? time
    : (availableTimes[0] ?? '')

  const today = toDateString(new Date())
  const errors = validateBooking({ date, time: selectedTime, guests }, today)
  const isValid = Object.keys(errors).length === 0
  const showError = (field) => touched[field] && errors[field]

  const markTouched = (e) => setTouched({ ...touched, [e.target.name]: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid) return
    const ok = submitForm({ date, time: selectedTime, guests, occasion })
    if (!ok) {
      setSubmitError('Sorry, we could not send your booking. Please try again.')
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        min={today}
        value={date}
        onChange={(e) => {
          setDate(e.target.value)
          dispatch({ type: 'UPDATE_TIMES', date: e.target.value })
        }}
        onBlur={markTouched}
        required
        aria-invalid={Boolean(showError('date'))}
        aria-describedby={showError('date') ? 'res-date-error' : undefined}
      />
      {showError('date') && (
        <p id="res-date-error" className="field-error">
          {errors.date}
        </p>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={selectedTime}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-describedby={errors.time ? 'res-time-error' : undefined}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      {errors.time && (
        <p id="res-time-error" className="field-error">
          {errors.time}
        </p>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        onBlur={markTouched}
        required
        aria-invalid={Boolean(showError('guests'))}
        aria-describedby={showError('guests') ? 'guests-error' : undefined}
      />
      {showError('guests') && (
        <p id="guests-error" className="field-error">
          {errors.guests}
        </p>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        {occasions.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      {submitError && (
        <p className="field-error" role="alert">
          {submitError}
        </p>
      )}

      <input
        type="submit"
        className="button-primary"
        value="Make Your reservation"
        disabled={!isValid}
      />
    </form>
  )
}

export default BookingForm
