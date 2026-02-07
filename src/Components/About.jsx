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
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Cybersecurity",
  "Python",
  "JavaScript/TypeScript",
  "React.js & Node.js",
  "Linux (Kali/Ubuntu)",
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
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
