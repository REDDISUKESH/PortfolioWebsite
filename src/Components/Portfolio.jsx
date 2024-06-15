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
    title: "Product Exchange",
    description:
      "The goal of the ExchangeXpert project is to create a successful online platform that caters to the needs of both buyers and sellers. The website aimsbUseto provide a convenient and reliable platform for individuals to sell their products and for customers to purchase products with ease",
    url: "https://github.com/REDDISUKESH/product-Exchange",
  },
  {
    title: "Blog Application",
    description:
      "The application fetches data from a public API (JSONPlaceholder) to populate the blog posts. It also includes features like pagination, responsive design for different screen sizes, and highlighting search results in post titles and content. ",
    url: "https://66608d004f2a363ffcf9bf09--luxury-froyo-3158e0.netlify.app/",
  },
  {
    title: "AR-Ecommerce",
    description:
      "AREcommerce revolutionizes e-commerce with advanced tech and innovative features, enhancing online shopping.",
    url: "https://github.com/REDDISUKESH/AR-Ecommerce",
  },
  {
    title: "Mobile Application",
    description:
      "We're designing an engaging landing page for our app, featuring a captivating hero section, key features, app screenshots, user testimonials, pricing plans, and easy download or contact options to drive conversions.",
    url: "https://665ea89ec5fcfdcd37f71128--heroic-vacherin-b29d37.netlify.app/",
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
