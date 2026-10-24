# Little Lemon — Table Booking Web App

Capstone project of the **Meta Front-End Developer Professional Certificate** (Coursera).
A React web app for Little Lemon, a fictional family-owned Mediterranean restaurant in Chicago:
a home page and an online table reservation.

## Features

- **Home page:** hero with a "Reserve a Table" call to action, this week's specials,
  testimonials and the story of the restaurant.
- **Booking form:** date, time, number of guests (1–10) and occasion. The available times
  come from the course's booking API and change when another date is chosen.
- **List of times:** every bookable time of the selected date, shown as available or booked.
- **Validation:** HTML5 attributes plus JavaScript checks. The submit button stays disabled
  and explains why until the form is valid; each field shows its error after the user leaves it.
- **Confirmation page** with a summary of the booking; a clear message if the booking cannot be sent.
- **Responsive** from phone to desktop, and **accessible**: semantic HTML, labelled fields,
  ARIA attributes, skip link, keyboard use; tested with VoiceOver.
- **Unit tests** with Vitest and React Testing Library (21 tests).

## Tech stack

React 19 · Vite 8 · React Router 7 · Vitest 4.1 · React Testing Library 16 · jsdom 29 · ESLint · Prettier

## Getting started

**Requirements:** Node.js 22.13 or later (tested with Node.js 24 LTS), npm and Git.

```bash
git clone https://github.com/mehmet520/front-end-developer-capstone.git
cd front-end-developer-capstone
npm install
npm run dev
```

Open http://localhost:5173 in your browser. The reservation page is at http://localhost:5173/booking.

## Scripts

| Command             | What it does                                           |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Starts the development server at http://localhost:5173 |
| `npm test`          | Runs the unit tests in watch mode (press `q` to quit)  |
| `npm test -- --run` | Runs the unit tests once                               |
| `npm run lint`      | Checks the code with ESLint                            |
| `npm run build`     | Builds the app into `dist/`                            |
| `npm run preview`   | Serves the built app locally                           |

## Project structure

```
src/
├── api/          api.js: the course's mock booking API (fetchAPI, submitAPI)
├── assets/       logo and images
├── components/   Header, Nav, Main, Footer, home page sections, BookingForm, BookingSlots
├── data/         specials and testimonials shown on the home page
├── pages/        HomePage, BookingPage, ConfirmedBooking, ComingSoon
├── utils/        booking times (initializeTimes, updateTimes), date helpers, form validation
└── setupTests.js test setup (jest-dom matchers, cleanup)
```

Tests live next to the code they test (`*.test.js`, `*.test.jsx`).

## Notes for reviewers

- **Booking API:** the course adds `api.js` with a `<script>` tag pointing to GitHub. The browser
  refuses to run that file because GitHub serves it as plain text, so it is copied into
  `src/api/api.js` as a module, with the same logic. The API answers synchronously, so the
  times are read directly in `initializeTimes` and `updateTimes`.
- **`initializeTimes` and `updateTimes`** are in `src/utils/bookingTimes.js` instead of `Main.jsx`:
  the project's ESLint rule for React Fast Refresh does not allow non-component exports from a
  component file. `Main.jsx` uses them with `useReducer`, as in the course.
- **Vitest instead of Jest:** Vitest is the test runner made for Vite. Tests use the same `test`,
  `expect` and React Testing Library API as in the course.
- **`aria-label="On Click"`:** not used word for word. On the submit button it would replace the
  visible name "Make Your reservation" for screen readers (WCAG 2.5.3, Label in Name). The ARIA
  step is covered with meaningful attributes instead: named navigation landmarks, a distinct
  `aria-label` for each "Order a delivery" link, `aria-invalid` and `aria-describedby` on fields
  with errors, and `role="alert"` for the submit error.
- **Pages outside the course scope** (About, Menu, Order Online, Login) show a "coming soon" page.
- **Occasion** offers Birthday, Engagement and Anniversary, as in the Figma design.

## Credits

- Design brief, texts, logo, food and owner photos: course materials of the Meta Front-End
  Developer Capstone. Little Lemon is a fictional restaurant.
- Customer photos: [Pexels](https://www.pexels.com/license/). The reviews are samples written
  for this project, not real customers.
- Mock booking API: [courseraap/capstone](https://raw.githubusercontent.com/courseraap/capstone/main/api.js).
- Fonts: Markazi Text and Karla from Google Fonts.
