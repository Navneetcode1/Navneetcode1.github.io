import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import ProfileContainer from "./Components/ProfileContainer"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Calender from './Components/Calender';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ProfileContainer/>
     <About/>
     <Projects/>
     <Skills/>
     <Calender/>
     <Contact/>
    </div>
  );
}

export default App;
