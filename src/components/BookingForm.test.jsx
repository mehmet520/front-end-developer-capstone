import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BookingForm from './BookingForm'

test('renders the date label', () => {
  render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} />)
  expect(screen.getByLabelText('Choose date')).toBeInTheDocument()
})
