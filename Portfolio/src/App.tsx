import { Divider } from "@mui/material"
import AboutMe from "./content/AboutMe"
import Header from "./content/Header"
import Intro from "./content/Intro"
import Skills from "./content/Skills"
import Projects from "./content/Projects"
import Footer from "./content/Footer"
import './App.css'



function App() {

  return (
    <>
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
