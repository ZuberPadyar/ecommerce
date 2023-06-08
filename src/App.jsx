import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Cardcontext } from './components/Context';
import Cart from './components/Cart';
import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
// import Otherproduct from './components/Otherproduct';


function App() {
  const [Card, setCard] = useState([]); 

  return (
    <div className="App">
      <BrowserRouter>
        <Cardcontext.Provider value={{ Card, setCard }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={< Cart/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/otherproduct" element={<Otherproduct />} /> */}
          </Routes>
        </Cardcontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
