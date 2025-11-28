import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import MobileNav from './components/MobileNav.jsx';
import Footer from './components/Footer.jsx';
import OrderPage from './components/OrderPage.jsx';

// Pages
import MainPage from './pages/MainPage.jsx';
import FullMenu from './pages/FullMenu.jsx';
import Contacts from './pages/Contacts.jsx';

import { useState } from 'react';

function App() {
  // Mobile Navigation State
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  const closeMobileNav = () => {
    setMobileNavVisible(false);
  };

  return (
    <div className="App">
      <Router>
        <Navbar toggleMobileNav={toggleMobileNav} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/payment" element={<OrderPage />} />
        </Routes>

        {mobileNavVisible && (
          <MobileNav closeMobileNav={closeMobileNav} />
        )}
      </Router>

      <Footer />
    </div>
  );
}

export default App;

