import { Link } from 'react-router-dom'
import heroImage from '../assets/images/hero-restaurant-food.jpg'
import './CallToAction.css'

function CallToAction() {
  return (
    <section className="hero">
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
