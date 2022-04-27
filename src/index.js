import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import WebServices from './components/pages/WebServices';
import DigitalServices from './components/pages/DigitalServices';
import SignUp from './components/pages/SignUp';
import Mailer from './components/mailer.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';


ReactDOM.render(<App />,
  document.getElementById('root')
);
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element=
        {<Home/>} />
        <Route path='/web-services' element={<WebServices/>} />
        <Route path='/digital-services' element={<DigitalServices/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/mailer' element={<Mailer/>} />
      </Routes>
      </Router>
      
</>
  );
}

export default App;

