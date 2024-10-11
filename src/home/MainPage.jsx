import React from "react";
import { FaHome } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Cuộn xuống phần body
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="topheader">
          {/* Div logo */}
          <div className="logo">
            <p className="logo-luxury">LUXURY</p>
            <p className="logo-hotels">HOTELS</p>
          </div>
          <nav className="navbar">
            <ul>
              <li className="home">
                <a href="#home">Home</a>
              </li>
              <li className="facilities">
                <a href="#facilities">Facilities</a>
              </li>
              <li className="rooms">
                <a href="#rooms">Rooms</a>
              </li>
              <li className="contact">
                <a href="#contact">Contact-us</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Welcome Section */}
        <div className="welcome">
          <p className="welcome-to">WELCOME TO:</p>
          <p className="luxury">LUXURY</p>
          <p className="hotels">HOTELS</p>
          <p className="description">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </p>
        </div>

        {/* Book Now Button */}
        <button className="book-now">
          <FaHome className="home-icon" /> {/* Icon ngôi nhà */}
          Book now
        </button>

        {/* Scroll Section */}
        <div className="scroll-section">
          <p className="scroll-text">Scroll</p> {/* Text "Scroll" */}
          <button className="scroll-button" onClick={handleScroll}>
            <FaChevronDown className="down-icon" /> {/* Icon chỉ xuống */}
          </button>
        </div>
      </header>

      <div className="body-content">
        <h1>All our room types are including complimentary breakfast</h1>
      </div>
    </div>
  );
}

export default Header;
