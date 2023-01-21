import React from "react";
import HeaderElement from "../components/HeaderElement";
import Footer from "../components/Footer";
// import BookingForm from "../components/BookingForm";

const Reservations = () => {
  return (
    <div>
      <HeaderElement />
      <h1 style={{ textAlign: "center", paddingTop: "15%", height: "90vh" }}>
        Reservations
      </h1>
      {/* <BookingForm /> */}
      <Footer />
    </div>
  );
};

export default Reservations;
