import BookingSlot from './BookingSlot'
import { initializeTimes } from '../utils/bookingTimes'
import './BookingSlots.css'

// Every bookable time; a time missing from availableTimes is already booked.
const allTimes = initializeTimes()

function BookingSlots({ availableTimes }) {
  return (
    <section className="booking-slots" aria-labelledby="booking-slots-title">
      <h2 id="booking-slots-title">Today's times</h2>
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
