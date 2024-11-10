import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import BookingForm from '../../components/BookingForm/BookingForm';
import Discover from '../../components/Discover/Discover';
import Services from '../../components/Services/Services';
import Banner from '../../components/Banner/Banner';

 


const Homepage = () => (
    <div>
    <Navbar/>
    <Banner/>
    <Discover/>
    <Services/>
    </div>
  );
  
  export default Homepage;