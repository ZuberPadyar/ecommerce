import './App.css'
import Navbar from './components/Navbar'
import products from './components/Products'
import Products from './components/Products'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Products />
      <Routes>
        <Route exact path='/home' Component={Home}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
