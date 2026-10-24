import { Link, useLocation } from 'react-router-dom'
import { formatLongDate } from '../utils/date'
import './ConfirmedBooking.css'

function ConfirmedBooking() {
  // Form data sent from Main with navigate(); empty if the page is opened directly.
  const booking = useLocation().state

  return (
    <section className="confirmed">
      <h1>Booking confirmed</h1>
      <p>Thank you! Your table at Little Lemon is reserved.</p>
      {booking && (
        <dl className="booking-summary">
          <dt>Date</dt>
          <dd>{formatLongDate(booking.date)}</dd>
          <dt>Time</dt>
          <dd>{booking.time}</dd>
          <dt>Guests</dt>
          <dd>{booking.guests}</dd>
          <dt>Occasion</dt>
          <dd>{booking.occasion}</dd>
        </dl>
      )}
      <Link to="/" className="button-primary">
        Back to home
      </Link>
    </section>
  )
}

export default ConfirmedBooking
