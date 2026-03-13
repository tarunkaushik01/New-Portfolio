// import { Divider } from "@mui/material"
import AboutMe from "./content/AboutMe"
import Header from "./content/Header"
import Intro from "./content/Intro"
import Skills from "./content/Skills"
import Projects from "./content/Projects"
import Footer from "./content/Footer"
import './App.css'
// import Hero from "./content/Test"
// import Snowfall from "react-snowfall"
// import Fireworks from "fireworks-js"
// import Snowfall from "react-snowfall"
function App() {
  return (
    <>
      {/* <Snowfall style={{position:"fixed"}} color="pink"/> */}
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
