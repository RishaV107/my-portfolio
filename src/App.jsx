import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Projects from "./component/Projects";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
