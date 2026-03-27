/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

import { InteractiveNetworkBackground } from "./components/ui/InteractiveNetworkBackground";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="hansadee-portfolio-theme">
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
        <InteractiveNetworkBackground />
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Education />
          <Certifications />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
