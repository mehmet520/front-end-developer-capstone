import { useState } from 'react'
import './BookingForm.css'

const occasions = ['Birthday', 'Engagement', 'Anniversary']

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value)
          dispatch({ type: 'UPDATE_TIMES', date: e.target.value })
        }}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        {occasions.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      <input
        type="submit"
        className="button-primary"
        value="Make Your reservation"
      />
    </form>
  )
}

export default BookingForm
