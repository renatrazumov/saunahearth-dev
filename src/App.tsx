import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import DesignStudio from './pages/DesignStudio';
import Auth from './pages/Auth';
import Invoice from './pages/Invoice';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design-studio" element={<DesignStudio />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;