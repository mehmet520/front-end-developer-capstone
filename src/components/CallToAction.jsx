import { Link } from 'react-router-dom'
import heroImage from '../assets/images/hero-restaurant-food.jpg'
import './CallToAction.css'

// Hero section of the home page with the main call to action: reserve a table.
function CallToAction() {
  return (
    <section className="hero full-bleed">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking" className="button-primary">
          Reserve a Table
        </Link>
      </div>
      <img
        className="hero-image"
        src={heroImage}
        alt="Waiter serving a tray of Little Lemon dishes"
      />
    </section>
  )
}

export default CallToAction
