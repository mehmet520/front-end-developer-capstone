import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

// Footer: logo, doormat navigation, contact details and social media links.
function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon logo" />

      <nav aria-label="Footer navigation">
        <h2>Doormat Navigation</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <address>
        <h2>Contact</h2>
        <p>678 Pisa Ave, Chicago, IL 60611</p>
        <p>
          <a href="tel:+13125550123">(312) 555-0123</a>
        </p>
        <p>
          <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
        </p>
      </address>

      <section aria-label="Social media links">
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://x.com">X</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
