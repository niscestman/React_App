import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Projet from "./components/Projet"
import Footer from "./components/Footer"


function App() {


  return (
    <>
      <div>
        <div className="p-3 md:px-[10%]">
          <Navbar />
          <Home />
        </div>
        <About />

        <div className="p-3 md:px-[10%]">
          <Experience />
          <Projet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App 
