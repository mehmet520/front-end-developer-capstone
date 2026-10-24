import { NavLink } from 'react-router-dom'

// Main navigation; NavLink marks the current page with aria-current="page".
function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/booking">Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/order">Order Online</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
