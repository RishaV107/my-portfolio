import { Element } from "react-scroll";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Projects from "./component/Projects";

function App() {
  return (
    <>
      <Element name="mainContainer">
        <Header />
        <div id="home">
          <MainContent />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </Element>
    </>
  );
}

export default App;
