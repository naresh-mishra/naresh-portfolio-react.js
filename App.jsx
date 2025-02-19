/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./src/Components/About";
import Footer from "./src/Components/Footer";
import Header from "./src/Components/Header";
import Home from "./src/Components/Home";
import Portfolio from "./src/Components/Portfolio";

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
  name: "Naresh Mishra",
  title: "Web Designer & Software Developer",
  email: "nareshmishra8535@gmail.com",
  gitHub: "https://github.com/naresh-mishra",
  instagram: "https://www.instagram.com/mishra_7_7/",
  linkedIn: "https://www.linkedin.com/in/naresh-ch-mishra/",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

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
