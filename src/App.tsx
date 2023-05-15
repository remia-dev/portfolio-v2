import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="mx-auto w-[60%]">
      <Navbar />
      <Hero />
         <Projects />
      <Footer />
    </div>
  );
}

export default App;
