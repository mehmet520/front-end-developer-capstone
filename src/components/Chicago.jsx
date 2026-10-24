import marioAndAdrianA from '../assets/images/mario-and-adrian-a.jpg'
import marioAndAdrianB from '../assets/images/mario-and-adrian-b.jpg'
import './Chicago.css'

// About section: the story of Little Lemon and its owners, Mario and Adrian.
function Chicago() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <p className="about-city">Chicago</p>
        <p>
          Based in Chicago, Illinois, Little Lemon is a family owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist.
        </p>
        <p>
          The restaurant is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant.
        </p>
      </div>
      <div className="about-images">
        <img src={marioAndAdrianA} alt="Mario and Adrian, the owners" />
        <img src={marioAndAdrianB} alt="Mario and Adrian in the kitchen" />
      </div>
    </section>
  )
}

export default Chicago
