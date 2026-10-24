import { describe, test, expect } from 'vitest'
import { initializeTimes, updateTimes } from './bookingTimes'
import { fetchAPI } from '../api/api'

describe('booking times', () => {
  test('initializeTimes returns today’s times from the API', () => {
    const times = initializeTimes()
    expect(times.length).toBeGreaterThan(0)
    expect(times).toEqual(fetchAPI(new Date()))
  })

  test('updateTimes returns the times for the selected date', () => {
    const times = updateTimes([], { type: 'UPDATE_TIMES', date: '2026-11-05' })
    expect(times).toEqual(fetchAPI(new Date(2026, 10, 5)))
  })

  test('updateTimes keeps the state when the date is cleared', () => {
    const state = ['17:00']
    expect(updateTimes(state, { type: 'UPDATE_TIMES', date: '' })).toBe(state)
  })
})
