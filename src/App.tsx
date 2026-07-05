import { TopBar } from "./components/layout/TopBar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingChat } from "./components/layout/FloatingChat";

import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { WhyUs } from "./components/sections/WhyUs";
import { Conditions } from "./components/sections/Conditions";
import { Treatments } from "./components/sections/Treatments";
import { Results } from "./components/sections/Results";
import { BeforeAfter } from "./components/sections/BeforeAfter";
import { Testimonials } from "./components/sections/Testimonials";
import { Gallery } from "./components/sections/Gallery";
import { Visit } from "./components/sections/Visit";

function App() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Conditions />
      <Treatments />
      <Results />
      <BeforeAfter />
      <Testimonials />
      <Gallery />
      <Visit />
      <Footer />
      <FloatingChat />
    </div>
  );
}

export default App;
