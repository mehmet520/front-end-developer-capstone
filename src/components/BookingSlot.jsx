function BookingSlot({ time, isAvailable }) {
  return (
    <li className={isAvailable ? 'slot slot-available' : 'slot slot-booked'}>
      <span>{time}</span>
      <span>{isAvailable ? 'Available' : 'Booked'}</span>
    </li>
  )
}

export default BookingSlot
