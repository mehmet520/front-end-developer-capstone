import { Link } from 'react-router-dom'
import { specials } from '../data/specials'
import './Specials.css'

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <Link to="/menu" className="button-primary">
          Online Menu
        </Link>
      </div>

      <div className="specials-cards">
        {specials.map((dish) => (
          <article key={dish.id} className="card">
            <img src={dish.image} alt={dish.name} />
            <div className="card-body">
              <div className="card-title">
                <h3>{dish.name}</h3>
                <span className="price">{dish.price}</span>
              </div>
              <p>{dish.description}</p>
              <Link to="/order">Order a delivery</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Specials
