import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

// Page shell: skip link, header, navigation, routed main content and footer.
function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  )
}

export default App
