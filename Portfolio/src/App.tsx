import { Divider } from "@mui/material"
import AboutMe from "./content/AboutMe"
import Header from "./content/Header"
import Intro from "./content/Intro"
import Skills from "./content/Skills"
import Projects from "./content/Projects"
import Footer from "./content/Footer"


function App() {
  return (
    <>
    <Header/>
    <Intro/>
    <br/>
    <Divider/>
    <AboutMe/>
    <br/>
    <Divider/>
    <Skills/>
    <br/>
    <Divider/>
    <Projects/>
    <br/>
    <Divider/>
    <Footer/>
    </>
  )
}

export default App
