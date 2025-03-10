import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TimelineIntro from "./components/TimelineIntro";
import TimelinePage from "./components/TimelinePage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <HeroSection />
      <TimelineIntro />
      <TimelinePage />
    </div>
  );
}

export default App;
