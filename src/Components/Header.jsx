/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        background: "rgba(10, 14, 39, 0.95)",
        backdropFilter: "blur(10px)",
        padding: "1.2rem",
        top: 0,
        width: "100%",
        zIndex: 1000,
        borderBottom: "2px solid rgba(0, 217, 255, 0.3)",
        boxShadow: "0 4px 20px rgba(0, 217, 255, 0.2)",
      }}
    >
      <a
        href="#home"
        style={{
          color: "#00d9ff",
          fontSize: "1.1rem",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          transition: "all 0.3s ease",
          textShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
        }}
        onMouseEnter={(e) => {
          e.target.style.textShadow = "0 0 20px #00d9ff, 0 0 30px #00d9ff";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.textShadow = "0 0 10px rgba(0, 217, 255, 0.5)";
          e.target.style.transform = "translateY(0)";
        }}
      >
        Home
      </a>
      <a
        href="#about"
        style={{
          color: "#00d9ff",
          fontSize: "1.1rem",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          transition: "all 0.3s ease",
          textShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
        }}
        onMouseEnter={(e) => {
          e.target.style.textShadow = "0 0 20px #00d9ff, 0 0 30px #00d9ff";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.textShadow = "0 0 10px rgba(0, 217, 255, 0.5)";
          e.target.style.transform = "translateY(0)";
        }}
      >
        About
      </a>
      <a
        href="#portfolio"
        style={{
          color: "#00d9ff",
          fontSize: "1.1rem",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          transition: "all 0.3s ease",
          textShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
        }}
        onMouseEnter={(e) => {
          e.target.style.textShadow = "0 0 20px #00d9ff, 0 0 30px #00d9ff";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.textShadow = "0 0 10px rgba(0, 217, 255, 0.5)";
          e.target.style.transform = "translateY(0)";
        }}
      >
        Portfolio
      </a>
      <a
        href="#footer"
        style={{
          color: "#00d9ff",
          fontSize: "1.1rem",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          transition: "all 0.3s ease",
          textShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
        }}
        onMouseEnter={(e) => {
          e.target.style.textShadow = "0 0 20px #00d9ff, 0 0 30px #00d9ff";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.textShadow = "0 0 10px rgba(0, 217, 255, 0.5)";
          e.target.style.transform = "translateY(0)";
        }}
      >
        Contact
      </a>
    </div>
  );
};

export default Header;
