import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import MainPanel from "../MainPanel";

function Home() {
  return (
    <>
      <MainPanel />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
