import React,{ useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './Banner.css'; 

function Banner() {
    const [rooms, setRooms] = useState(1);

    const handleRoomChange = (change) => {
      setRooms(Math.max(1, rooms + change));
    };
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>Work from Ladakh</h1>
        <p>India's first true digital tourism ecosystem</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"> <FaFacebook />
            </i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"><FaInstagram/></i>
          </a>
        </div>
      </div>
      <div className="banner-image">
        <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1731233509/yi4a3cjtwp2yiwmdk22n.webp" alt="Ladakh Banner" />
      </div>
      <div className="banner-form">
        <div className="form-group">
          <label htmlFor="checkIn"> CHECK-IN</label>
          <input type="date" id="checkIn" name="checkIn" placeholder="01 Feb 2022" />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut">CHECK-OUT</label>
          <input type="date" id="checkOut" name="checkOut" placeholder="07 Feb 2022" />
        </div>
        <div className="form-group">
          <label htmlFor="rooms">ROOMS</label>
          <div className="room-counter">
            <button type="button" onClick={() => handleRoomChange(-1)}>-</button>
            <input type="number" id="rooms" name="rooms" value={1} min="1" />
            <button type="button" onClick={() => handleRoomChange(1)}>+</button>
          </div>
        </div>
        <button className="book-button">BOOK</button>
      </div>
    </div>
  );
}

export default Banner;