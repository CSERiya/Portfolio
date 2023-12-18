import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from './Components/Skills/skills'
import Works from "./Components/Works/works";
import Contacts from './Components/Contact/contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contacts/>
    </div>
  );
}

export default App;
