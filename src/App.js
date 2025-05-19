import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";
import Intro from "./components/Intro/intro.js";
import Navbar from "./components/Navbar/navbar.js";
import Qualification from "./components/Qualification/qualification.js";
import Skills from "./components/Skills/skills.js";
import Works from "./components/Works/works.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Qualification />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
