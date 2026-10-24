import BookingSlot from './BookingSlot'
import { allTimes } from '../utils/bookingTimes'
import './BookingSlots.css'

// List of all bookable times for the selected date; times missing from availableTimes are booked.
function BookingSlots({ availableTimes }) {
  return (
    <section className="booking-slots" aria-labelledby="booking-slots-title">
      <h2 id="booking-slots-title">Times for the selected date</h2>
      <ul>
        {allTimes.map((time) => (
          <BookingSlot
            key={time}
            time={time}
            isAvailable={availableTimes.includes(time)}
          />
        ))}
      </ul>
    </section>
  )
}

export default BookingSlots
