import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import ProfileContainer from "./Components/ProfileContainer"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ProfileContainer/>
     <About/>
     <Projects/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;
