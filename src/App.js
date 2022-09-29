import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  // const [isVisible, setIsVisible] = useState("hidden");

  // useEffect(() => {
  //   const observer = new IntersectionObserver((enteries) => {
  //     enteries.forEach((entry) => {
  //       console.log(entry);
  //       if (entry.isIntersecting) {
  //         setIsVisible("show");
  //       } else {
  //         setIsVisible("hidden");
  //       }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll(".hidden");
  //   hiddenElements.forEach((el) => observer.observe(el));
  // });
  return (
    <div className="App bg-slate-900 w-full h-full space-y-12 relative scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
