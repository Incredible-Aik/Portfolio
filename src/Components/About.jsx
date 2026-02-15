/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Adusei Kwame Isaac, but you can call me Aik. I'm from Osiem in the Eastern Region of Ghana and a student at GCTU. I'm a thoughtful and introspective person who enjoys learning and solving problems. Though I might seem quiet at first, I'm always up for a good conversation or a new challenge.";

/**
 * Technical stack - technologies and skills you work with
 */
const skillsList = [
  "Cybersecurity",
  "Python",
  "JavaScript/TypeScript",
  "React.js & Node.js",
  "Linux",
  "Penetration Testing",
  "PostgreSQL",
  "Network Security",
  "Git & GitHub",
  "Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "My journey in cybersecurity began with a fascination for technology and a desire to understand how systems can be both created and protected. During my first year of studies, I immersed myself in the basics of networking and operating systems, realizing the importance of a strong foundational knowledge. I offered I.C.T as one of my elective programs in the secondary school which gave me a strong background to enter the field of computer science. Earning My First Certification: Midway through my studies, I achieved my FLL certification. This not only validated my skills but also boosted my confidence and commitment to pursuing a career in cybersecurity.";

const About = () => {
  return (
    <section className="min-height padding" id="about" style={{ position: "relative", overflow: "visible" }}>
      <img className="background" src={image} alt={imageAltText} />
      <div className="cyberpunk-overlay"></div>
      <div
        style={{
          backgroundColor: "rgba(10, 14, 39, 0.95)",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          border: "2px solid #00d9ff",
          boxShadow: "0 0 30px rgba(0, 217, 255, 0.5), inset 0 0 20px rgba(0, 217, 255, 0.1)",
          borderRadius: "10px",
          minHeight: "auto",
          overflow: "visible",
        }}
      >
        <h2 style={{ color: "#00d9ff" }}>About Myself</h2>
        <p className="large" style={{ color: "white" }}>
          {description}
        </p>
        <hr style={{ borderColor: "rgba(0, 217, 255, 0.3)" }} />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            color: "#ffffff",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ color: "#00d9ff" }}>
              {skill}
            </li>
          ))}
        </ul>
        <hr style={{ borderColor: "rgba(0, 217, 255, 0.3)" }} />
        <p style={{ padding: "1rem 3rem 0", color: "white" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
