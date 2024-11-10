// src/components/Services/Services.js
import React from 'react';
import './Services.css';

const servicesData = [
  { image:"https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235203/ebzgq10iakzazddme6bw.jpg",title: "High Speed Internet", description: "Optical fiber connections provided in all Brisphere scenic spaces." },
  { image:"https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235449/etvobpydsq2bvmaapqql.png",title: "Healthy Meals", description: "A healthy breakfast and pleasant dinner are serviced at your space." },
  { image:"https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235512/c9umtm2h8vizv5lnnrqc.png",title: "Homely Stay", description: "Comfortable beds and a kitchen are part of the space within Brisphere." },
  { image:"https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235512/c9umtm2h8vizv5lnnrqc.png",title: "Transportation", description: "Transport services within Brisphere for all scenic areas." },
  { image:"https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235683/jbtrgsebvjlmwyurxpzh.png",title: "Food Delivery", description: "Optical fiber connections provided in scenic areas." },
  { image:"https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235714/fk70by5ow7n389duewyo.png",title: "Tourism", description: "Guided tours across all Brisphere scenic working spaces." },
  { image:"https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235744/qxjkhez7a3nrri9wzdnv.png",title: "Job", description: "Job opportunities provided for a variety of services within Brisphere." },
  { image:"https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235744/py6rbr4adkd2yl87zjkh.png",title: "Rental Service", description: "Rental services for stay and transportation within Brisphere." },
  { image:"https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235743/yna5wy6uvdkcemo1gieb.png",title: "Online Shop", description: "An online shop available to order necessities within Brisphere." },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} className='image' />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
