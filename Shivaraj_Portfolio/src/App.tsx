import { useState, useEffect } from "react";
import IntroVideo from "./components/IntroVideo";
import { Navbar } from "./components/Navbar";
import { FloatingNav } from "./components/FloatingNav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  // Always use dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      <Navbar />
      <FloatingNav />

      <main>
        {/* Show intro video first */}
        {!introDone && <IntroVideo onFinish={() => setIntroDone(true)} />}

        {/* AFTER INTRO */}
        {introDone && (
          <>
            <Home />
            <About />
            <Resume />
            <Projects />
            <Skills />
            <Blog />
            <Contact />
          </>
        )}
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Shivaraj Senthil Rajan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
