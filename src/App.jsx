import About from "./components/About"
import Certification from "./components/Certification"
import Education from "./components/Education"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="py-5 bg-black">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certification />
    </div>
  )
}

export default App
