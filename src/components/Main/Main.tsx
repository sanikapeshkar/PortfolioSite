import React from 'react';
import './Main.css';

const Main = ({details}:any) => {
  return (
    <div className="main-container">
      <div className="left-section">
        <h1 className="tagline">{details.tagline}</h1>
        <a href="/resume.pdf" download className="download-btn">
          Download Resume
        </a>
        <div className="contact-info">
          <p>Email: <a href="mailto:you@example.com">{details.email}</a></p>
          <p>Phone: <a href="tel:+1234567890">{details.contact.phone}</a></p>
          <p>LinkedIn: <a href={details.linkedIn} target="_blank" rel="noopener noreferrer">sanikapeshkar</a></p>
        </div>
      </div>
      <div className="right-section">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Main;
