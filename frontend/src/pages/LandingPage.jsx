// src/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>University of Lahore</h1>
        <p>Welcome to the official website of the University of Lahore</p>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          Established in 1999, the University of Lahore is one of the premier private institutions in Pakistan.
          We offer a diverse range of undergraduate, graduate, and postgraduate programs across various disciplines.
        </p>
      </section>

      <section className="programs">
        <h2>Our Programs</h2>
        <ul>
          <li>Business Administration</li>
          <li>Engineering</li>
          <li>Computer Science</li>
          <li>Social Sciences</li>
          <li>Humanities</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Address: 1-Km, Defence Road, Lahore, Pakistan<br />
          Phone: +92-42-111-865-865<br />
          Email: info@uol.edu.pk
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 University of Lahore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
