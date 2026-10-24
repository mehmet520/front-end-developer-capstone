import { test, expect } from 'vitest'
import { toDateString, formatLongDate } from './date'

test('toDateString formats a date as YYYY-MM-DD in local time', () => {
  expect(toDateString(new Date(2026, 10, 6))).toBe('2026-11-06')
})

test('formatLongDate writes the date in words', () => {
  expect(formatLongDate('2026-11-06')).toBe('Friday, November 6, 2026')
})
