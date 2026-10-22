import logo from '../assets/logo.svg'

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon logo" />

      <nav aria-label="Footer navigation">
        <h2>Doormat Navigation</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/booking">Reservations</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
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
