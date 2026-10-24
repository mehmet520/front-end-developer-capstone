import BookingForm from '../components/BookingForm'
import BookingSlots from '../components/BookingSlots'

// Booking page: the form and the list of times for the selected date.
function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <h1>Reserve a table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
      <BookingSlots availableTimes={availableTimes} />
    </>
  )
}

export default BookingPage
