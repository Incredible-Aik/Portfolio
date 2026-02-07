/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "🏥 MedixCare Hospital Management System",
    description:
      "A comprehensive full-stack hospital management system featuring QR code-based patient check-in, AI-powered appointment scheduling, electronic medical records (EMR), role-based access control, integrated billing, and pharmacy management. Built with Node.js, Express, TypeScript, React 18, PostgreSQL, and Tailwind CSS.",
    url: "https://github.com/Incredible-Aik/medixcare-hms",
  },
  {
    title: "🔐 Access Control Implementation Lab (Linux)",
    description:
      "Academic project implementing and evaluating access controls in Linux environments. Configured identification, authentication, and authorization mechanisms, and applied file permissions and ACLs for secure resource management.",
    url: "https://github.com/Incredible-Aik",
  },
  {
    title: "🌐 Personal Portfolio Website",
    description:
      "A React-based portfolio website showcasing my projects, skills, and journey in cybersecurity. Built using GitHub Codespaces and deployable to GitHub Pages or Azure Static Web Apps.",
    url: "https://github.com/Incredible-Aik/Portfolio",
  },
  {
    title: "📄 Professional CV Repository",
    description:
      "My professional CV/Resume maintained in a GitHub repository, showcasing my education, technical skills, certifications, and project experience in cybersecurity and software development.",
    url: "https://github.com/Incredible-Aik/CV",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
