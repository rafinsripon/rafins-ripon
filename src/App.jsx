//pages
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Error from './Pages/Error';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Services from './Components/Services';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Services /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/services' element={<Services />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
