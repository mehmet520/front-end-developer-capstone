import BookingForm from '../components/BookingForm'
import BookingSlots from '../components/BookingSlots'

function BookingPage({ availableTimes, dispatch }) {
  return (
    <>
      <h1>Reserve a table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <BookingSlots availableTimes={availableTimes} />
    </>
  )
}

export default BookingPage
