import logo from './logo.svg';
import './App.css';

//importing components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Routes, Route, Switch} from 'react-router-dom';


//importing pages components 
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { AboutUs } from './pages/AboutUs';
import { DIYMarquees } from './pages/DIYMarquees'
import { PopupMarquees } from './pages/PopupMarquees'
import { StructureMarquees } from './pages/StructureMarquees'
import { Umbrella } from './pages/Umbrella'
import { Accessories } from './pages/Accessories'

const NavData = [
  {name: "Home", path: "/", public: true},
  {name: "AboutUs", path: "/about", public: true},
  {name: "Contact", path: "/contact", public: true},
  // {name: "DIYMarquees", path: "/diy-marquees", public: true},
  // {name: "PopupMarquees", path: "/popup-marquees", public: true},
  // {name: "StructureMarquees", path: "/structure-marquees", public: true},
  // {name: "Umbrella", path: "/umbrellas", public: true},
  // {name: "Accessories", path: "/accessories", public: true},
]

function App() {
  return (
    <div className="App">
      <Header title='Instant Marquees' headernav={NavData}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/diy-marquees" element={<DIYMarquees/>}/>
        <Route path="/popup-marquees" element={<PopupMarquees/>}/>
        <Route path="/structure-marquees" element={<StructureMarquees/>}/>
        <Route path="/umbrellas" element={<Umbrella/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
      </Routes>
      <Footer year="2023"/> 
    </div>
  );
}

export default App;
