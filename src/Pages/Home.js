import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Register from "../Components/Register";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Contacta from "../Components/Contacta";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <Register />
      <BookAppointment />
      <Contacta />
      <Reviews />
      <Doctors />
      <Footer />
      
    

    </div>
  );
}

export default Home;
