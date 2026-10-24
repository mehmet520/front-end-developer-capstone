import { useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'
import ConfirmedBooking from '../pages/ConfirmedBooking'
import { initializeTimes, updateTimes } from '../utils/bookingTimes'
import { submitAPI } from '../api/api'

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  const navigate = useNavigate()

  // Sends the booking to the API and opens the confirmation page on success.
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/confirmed', { state: formData })
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  )
}

export default Main
