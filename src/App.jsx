/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Isaac Kwame Adusei",
  title: "Cybersecurity Enthusiast - Unpredictable",
  email: "aikadusei2005@gmail.com",
  gitHub: "Incredible-Aik",
  instagram: "",
  linkedIn: "isaac-kwame-adusei-20777828b",
  medium: "",
  twitter: "Incredible_Aik",
  youTube: "",
};

const primaryColor = "#0a0e27"; // Deep dark blue/black
const secondaryColor = "#00d9ff"; // Bright cyan/electric blue

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
