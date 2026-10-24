// Mock booking API provided by the course (Meta Front-End Developer Capstone).
// Source: https://raw.githubusercontent.com/courseraap/capstone/main/api.js
// Copied into the project because the browser refuses to run the remote file
// (it is served as text/plain). Only the exports were added.

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31
  var a = 185852
  var s = seed % m
  return function () {
    return (s = (s * a) % m) / m
  }
}

// Returns the available times for the given date, e.g. ['17:00', '18:30'].
export const fetchAPI = function (date) {
  let result = []
  let random = seededRandom(date.getDate())

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00')
    }
    if (random() < 0.5) {
      result.push(i + ':30')
    }
  }
  return result
}

// Always succeeds; a real API would save the booking.
// eslint-disable-next-line no-unused-vars
export const submitAPI = function (formData) {
  return true
}
