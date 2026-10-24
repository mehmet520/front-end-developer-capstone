import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import BookingForm from './BookingForm'
import { toDateString } from '../utils/date'

const today = toDateString(new Date())

function renderForm(submitForm = vi.fn(() => true)) {
  render(
    <BookingForm
      availableTimes={['17:00', '18:00']}
      dispatch={() => {}}
      submitForm={submitForm}
    />,
  )
  return submitForm
}

describe('BookingForm HTML5 validation attributes', () => {
  test('date is required and cannot be in the past', () => {
    renderForm()
    const date = screen.getByLabelText('Choose date')
    expect(date).toHaveAttribute('type', 'date')
    expect(date).toBeRequired()
    expect(date).toHaveAttribute('min', today)
  })

  test('time is required', () => {
    renderForm()
    expect(screen.getByLabelText('Choose time')).toBeRequired()
  })

  test('guests is a required number from 1 to 10', () => {
    renderForm()
    const guests = screen.getByLabelText('Number of guests')
    expect(guests).toHaveAttribute('type', 'number')
    expect(guests).toHaveAttribute('min', '1')
    expect(guests).toHaveAttribute('max', '10')
    expect(guests).toBeRequired()
  })

  test('occasion offers three options', () => {
    renderForm()
    expect(
      screen.getAllByRole('option', {
        name: /birthday|engagement|anniversary/i,
      }),
    ).toHaveLength(3)
  })
})

describe('BookingForm submission', () => {
  test('the submit button is disabled until a date is chosen', () => {
    renderForm()
    const button = screen.getByRole('button', { name: 'Make Your reservation' })
    expect(button).toBeDisabled()
    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: { value: today },
    })
    expect(button).toBeEnabled()
  })

  test('sends the form data to submitForm', () => {
    const submitForm = renderForm()
    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: { value: today },
    })
    fireEvent.click(
      screen.getByRole('button', { name: 'Make Your reservation' }),
    )
    expect(submitForm).toHaveBeenCalledWith({
      date: today,
      time: '17:00',
      guests: 1,
      occasion: 'Birthday',
    })
  })

  test('shows an error when the booking cannot be sent', () => {
    renderForm(vi.fn(() => false))
    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: { value: today },
    })
    fireEvent.click(
      screen.getByRole('button', { name: 'Make Your reservation' }),
    )
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Sorry, we could not send your booking.',
    )
  })
})
