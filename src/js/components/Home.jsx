import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <Jumbotron />
        <Cards />
      </main>

      <Footer />
    </div>
  );
};

export default Home;