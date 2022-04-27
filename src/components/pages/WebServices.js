import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import WebContent from '../WebContent';
import WebCards from '../WebCards';

function WebServices() {
    return (
  
        <>
          <h1 className='web-services'>WEB SERVICES</h1>
          <WebCards />
          <WebContent />
          <Footer />

        </>)
    
}

export default WebServices;
