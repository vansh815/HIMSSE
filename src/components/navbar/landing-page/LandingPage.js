import React from 'react';

import Header from './Header';
import Card from './Card';
import Contact from './Contact';
import About from './About';

import './LandingPage.css';

const LandingPage = () => {
    return (
      <div id="body">
        <About />
        <Card className='patients'
              img='https://www.pngkey.com/png/full/33-337638_medicine-logo-png-1-medical-logo.png'
              title='Patients'
              description='With HIMS, patients have the ability to search for nearby doctors, 
              as well as book appointments and chat with them. They are also able to chat with our 
              insurance partners to find the best plan for their needs.'/>
        <Card className='doctors'
              img='https://www.pngkey.com/png/full/33-337638_medicine-logo-png-1-medical-logo.png'
              title='Doctors'
              description='Doctors who sign up for HIMS have the potential to increase their number 
              of clients through patient who book with them. When a patient books an appointment, 
              their doctor is given access to important medical information to provide the best care.'/>
        <Card className='insurance'
              img='https://www.pngkey.com/png/full/33-337638_medicine-logo-png-1-medical-logo.png'
              title='Insurance Providers'
              description='Our insurance partners can engage with patients on our site and work with 
              them to find a health insurance plan tailored to their needs.'/>
        <Contact />
      </div> 
    )
  }

  export default LandingPage;