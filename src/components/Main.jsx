import { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'
import { initializeTimes, updateTimes } from '../utils/bookingTimes'

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
    </main>
  )
}

export default Main
