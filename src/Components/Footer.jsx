/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw",
        borderTop: "2px solid rgba(0, 217, 255, 0.3)",
        boxShadow: "0 -4px 20px rgba(0, 217, 255, 0.2)",
      }}
    >
      <h2
        style={{
          color: "#00d9ff",
          textShadow: "0 0 20px rgba(0, 217, 255, 0.8)",
          fontSize: "2.5rem",
          marginBottom: "1rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        Get In Touch
      </h2>
      <p
        style={{
          color: "#ffffff",
          fontSize: "1.2rem",
          maxWidth: "600px",
          textAlign: "center",
          lineHeight: "1.6",
        }}
      >
        I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img 
              src={envelopeIcon} 
              alt="email" 
              className="socialIcon"
            />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img 
              src={devDotToIcon} 
              alt="Dev.to" 
              className="socialIcon"
            />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img 
              src={gitHubIcon} 
              alt="GitHub" 
              className="socialIcon"
            />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: "all 0.3s ease",
              filter: "drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 20px #00d9ff)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img 
              src={instagramIcon} 
              alt="Instagram" 
              className="socialIcon"
            />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: "all 0.3s ease",
              filter: "drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 20px #00d9ff)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img 
              src={linkedInIcon} 
              alt="LinkedIn" 
              className="socialIcon"
            />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img 
              src={mediumIcon} 
              alt="Medium" 
              className="socialIcon"
            />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img 
              src={twitterIcon} 
              alt="Twitter" 
              className="socialIcon"
            />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: "all 0.3s ease",
              filter: "drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 20px #00d9ff)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img 
              src={youTubeIcon} 
              alt="YouTube" 
              className="socialIcon"
            />
          </a>
        )}
      </div>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "0.9rem",
          marginTop: "2rem",
        }}
      >
        © 2026 {name}. Crafted with passion and code.
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
