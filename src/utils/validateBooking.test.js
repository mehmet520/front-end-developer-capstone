import { describe, test, expect } from 'vitest'
import { validateBooking } from './validateBooking'

const today = '2026-10-24'
const valid = { date: '2026-11-06', time: '19:00', guests: 4 }

describe('validateBooking', () => {
  test('returns no errors for valid data', () => {
    expect(validateBooking(valid, today)).toEqual({})
  })

  test('accepts today and the guest limits 1 and 10', () => {
    expect(validateBooking({ ...valid, date: today }, today)).toEqual({})
    expect(validateBooking({ ...valid, guests: 1 }, today)).toEqual({})
    expect(validateBooking({ ...valid, guests: '10' }, today)).toEqual({})
  })

  test('rejects a missing date', () => {
    expect(validateBooking({ ...valid, date: '' }, today).date).toBe(
      'Please choose a date.',
    )
  })

  test('rejects a past date', () => {
    expect(validateBooking({ ...valid, date: '2026-10-23' }, today).date).toBe(
      'Please choose today or a later date.',
    )
  })

  test('rejects a missing time', () => {
    expect(validateBooking({ ...valid, time: '' }, today).time).toBeDefined()
  })

  test.each([0, 11, 2.5, ''])('rejects %s guests', (guests) => {
    expect(validateBooking({ ...valid, guests }, today).guests).toBe(
      'Please enter between 1 and 10 guests.',
    )
  })
})
