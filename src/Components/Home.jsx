/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * For cyberpunk theme, consider using:
 * - Tech/circuit board patterns
 * - Neon cityscape
 * - Abstract tech visualization
 * - Matrix-style digital rain
 * - Dark tech workspace
 *
 * Free sources: unsplash.com, pexels.com
 * Search terms: "cyberpunk", "tech background", "neon city", "circuit board"
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/woman-with-tablet.jpg";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div className="cyberpunk-overlay"></div>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 2,
          width: "90%",
          maxWidth: "800px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "900",
            color: "#00d9ff",
            textShadow: "0 0 20px #00d9ff, 0 0 40px #00d9ff, 0 0 60px #00d9ff",
            marginBottom: "1rem",
            letterSpacing: "0.1em",
            animation: "glow 2s ease-in-out infinite alternate",
          }}
        >
          {name}
        </h1>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "400",
            color: "#ffffff",
            textShadow: "0 0 10px #00d9ff, 2px 2px 10px rgba(0,0,0,0.8)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginTop: "1rem",
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <img
          src={arrowSvg}
          style={{
            height: "3rem",
            width: "3rem",
            filter: "drop-shadow(0 0 10px #00d9ff)",
          }}
          alt={imageAltText}
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
