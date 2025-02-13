

import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: " Master Class MERN App🎉",
    description:
    "The Master Class MERN App is a robust course marketplace built with MongoDB, Express, React, and Node.js. It enables instructors to showcase and sell courses while offering students a seamless, user-friendly platform for quality learning.",
    url: "https://github.com/naresh-mishra/Master-Class-MERN-",
  },
  {
    title: "News Sphere React App🎉",
    description:
      "The News Sphere React App is a dynamic news aggregator built with React that delivers headlines across sports, business, and technology. Its intuitive, block-based layout enables easy navigation and access to the latest news.",
    url: "https://github.com/naresh-mishra/News-sphere-react-app",
  },
  {
    title: "Naresh Mishra's Portfolio(using html,css,js)🎉",
    description:
      "Naresh Mishra's Portfolio is a website built with HTML, CSS, and JavaScript that showcases projects demonstrating creativity and technical expertise. Its intuitive design and smooth navigation offer a seamless browsing experience. Discover my work today.",
    url: "https://naresh-mishra-portfolio.netlify.app/",
  },
  {
    title: "Landing Page🎉",
    description:
      "A sleek, modern landing page built with HTML, CSS, and JavaScript. It features a clean layout, engaging animations, and responsive design—providing visitors with an appealing introduction to the brand and its services.",
    url: "https://codsoft-naresh-landingpage.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover",marginLeft:"30px" }}
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
