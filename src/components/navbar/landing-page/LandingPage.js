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
              img='https://i.imgur.com/tUCdGZO.png'
              title='Patients'
              description='With HIMS, patients have the ability to search for nearby doctors, 
              as well as book appointments and chat with them. They are also able to chat with our 
              insurance partners to find the best plan for their needs.'/>
        <Card className='doctors'
              img='https://www.pinclipart.com/picdir/big/4-43129_medical-clip-art-community-helpers-get-doctor-clipart.png'
              title='Doctors'
              description='Doctors who sign up for HIMS have the potential to increase their number 
              of clients through patient who book with them. When a patient books an appointment, 
              their doctor is given access to important medical information to provide the best care.'/>
        <Card className='insurance'
              img='https://www.pngkit.com/png/full/330-3309028_life-insurance-clipart-insurance-company-hand-with-money.png'
              title='Insurance Providers'
              description='Our insurance partners can engage with patients on our site and work with 
              them to find a health insurance plan tailored to their needs.'/>
      </div> 
    )
  }

  export default LandingPage;