import { describe, test, expect } from 'vitest'
import { initializeTimes, updateTimes } from './bookingTimes'

describe('booking times', () => {
  test('initializeTimes returns the bookable times', () => {
    expect(initializeTimes()).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ])
  })

  test('updateTimes returns the same times it receives', () => {
    const state = ['17:00', '18:00']
    expect(
      updateTimes(state, { type: 'UPDATE_TIMES', date: '2026-11-05' }),
    ).toEqual(state)
  })
})
