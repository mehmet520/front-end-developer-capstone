import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Remove the rendered component after each test so tests do not affect each other.
afterEach(cleanup)
