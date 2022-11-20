import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Container from './styles/container.css';

// // Components
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js'
// import RouteChangeTracker from './components/RouteChangeTracker/RouteChangeTracker.js'
// // Pages
import Home from './pages/Home.js';
import Mailchimp from './pages/Mailchimp.js';
// import ReactGA from 'react-ga';




// const TRACKING_ID = "UA-154629017-3";
// ReactGA.initialize(TRACKING_ID);


function App() {
  // ReactGA.pageview('/');
  return (
    <Router>
      
      {/* <RouteChangeTracker/> */}
      <div>
        {/* <Modal/> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mailchimp" element={<Mailchimp/>} />
         

        </Routes>
        <Footer/>
      </div>
      
    </Router>
  )
}

export default App;
