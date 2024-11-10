import React from 'react';
import './Discover.css'; // Import the CSS file for styling

const testimonialsData = [
  {
    name: 'Arjun Raghav',
    rating: 5,
    text: 'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.',
    image: 'https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235882/jqszaqjgkyeqwgdrvhxc.png' // Replace with your actual image URL
  },
  {
    name: 'Anand Solanki',
    rating: 5,
    text: 'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.',
    image: 'https://res.cloudinary.com/dlfwqynh5/image/upload/v1731235882/jqszaqjgkyeqwgdrvhxc.png' // Replace with your actual image URL
  },
];

function Testimonials() {
  return (
    <div className="testimonials">
      {testimonialsData.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <div className="testimonial-header">
            <img src={testimonial.image} alt={testimonial.name} />
            <div>
              <h3>{testimonial.name}</h3>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
              </div>
            </div>
          </div>
          <p>{testimonial.text}</p>
          <a href="#" className="read-more">Read More</a>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;

