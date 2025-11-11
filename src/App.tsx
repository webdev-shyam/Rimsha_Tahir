import PortfolioNavbar from './components/PortfolioNavbar';
import PortfolioHero from './components/PortfolioHero';
import PortfolioAbout from './components/PortfolioAbout';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import PortfolioContact from './components/PortfolioContact';
import PortfolioFooter from './components/PortfolioFooter';

function App() {
  return (
    <div className="min-h-screen bg-base">
      <PortfolioNavbar />
      <PortfolioHero />
      <PortfolioAbout />
      <Experience />
      <Skills />
      <Education />
      <PortfolioContact />
      <PortfolioFooter />
    </div>
  );
}

export default App;
