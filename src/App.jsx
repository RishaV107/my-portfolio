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
    <div>
      <Header />
      <main>
        <section id="home">
          <MainContent />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
