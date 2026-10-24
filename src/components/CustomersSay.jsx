import { testimonials } from '../data/testimonials'
import './CustomersSay.css'

function CustomersSay() {
  return (
    <section className="testimonials full-bleed">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((t) => (
          <article key={t.id} className="testimonial">
            <p className="rating">
              <span aria-hidden="true">
                {'★'.repeat(t.rating)}
                {'☆'.repeat(5 - t.rating)}
              </span>
              <span className="visually-hidden">
                Rating: {t.rating} out of 5
              </span>
            </p>
            <div className="customer">
              <img className="avatar" src={t.image} alt="" />
              <h3>{t.name}</h3>
            </div>
            <p>“{t.review}”</p>
          </article>
        ))}
      </div>
      <p className="testimonials-note">
        Sample reviews for this course project. Photos: Pexels.
      </p>
    </section>
  )
}

export default CustomersSay
