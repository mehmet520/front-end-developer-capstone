import { Link } from 'react-router-dom'
import './ComingSoon.css'

// Shown for pages that are not part of this course project yet (About, Menu, Order Online, Login).
function ComingSoon() {
  return (
    <section className="coming-soon">
      <h1>This page is coming soon</h1>
      <p>We are still working on this part of the Little Lemon website.</p>
      <Link to="/" className="button-primary">
        Back to home
      </Link>
    </section>
  )
}

export default ComingSoon
