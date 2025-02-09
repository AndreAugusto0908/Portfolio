import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Tech from "./components/Tech"


function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-screen w-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="relative min-h-screen w-full overflow-auto">
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Navbar />
          <Hero />
          <Tech />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
