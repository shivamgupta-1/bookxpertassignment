import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Leave the Numbers to Us</h1>
          <p>Your trusted partner for hassle-free bookkeeping and accounting</p>
          <Link to="/login" className="cta-button">Get Started</Link>
        </div>
      </section>

      <section className="section who-we-are">
        <h2>WHO WE ARE</h2>
        <p>Our team of accounting, management, and IT specialists unlocks the full potential for SMEs by solving accounting, MIS, and compliance challenges through innovative FinTech solutions.</p>
        <p>Our FinTech-powered accounting streamlines processes and ensures effortless compliance, putting actionable financial data at your fingertips for empowered decision-making.</p>
        <a href="#about" className="learn-more">Learn More</a>
      </section>

      <section className="section what-we-do">
        <h2>WHAT WE DO</h2>
        <p>Evolving government norms continually affect how companies should manage their accounts, comply with taxation and prepare for audits.</p>
        <p>We enable entrepreneurs, medium and small businesses (MSMEs) avail expert services to keep their accounts and data on track, in line with contemporary government regulations.</p>
        <a href="#services" className="learn-more">Learn More</a>
      </section>

      <section className="section how-we-do-it">
        <h2>HOW WE DO IT</h2>
        <p>We provide you with a team of experts - from accounts, management, and technology to deliver data-driven analytical solutions to your firm.</p>
        <p>Our user-friendly app provides insightful data at your fingertips</p>
        <p>We provide an executive, dedicated to supporting you and your requirements</p>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat">
          <h3>₹1 Lakh Crore+</h3>
          <p>Value of Transactions Handled</p>
        </div>
        <div className="stat">
          <h3>5 Crore+</h3>
          <p>No. of Transactions processed</p>
        </div>
        <div className="stat">
          <h3>1 Crore+</h3>
          <p>Fraud Transactions Identified</p>
        </div>
        <div className="stat">
          <h3>500+</h3>
          <p>Clients</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>CLIENT SUCCESS STORIES</h2>
        <div className="testimonial">
          <p>"Bookxpert understood my situation & prepared my entire books of accounts of last year within 1 month with extraordinary accuracy & without missing a single transaction."</p>
          <cite>Pavan Trading Company Paints & Hardware</cite>
        </div>
        <div className="testimonial">
          <p>"Being in Dubai, monitoring my businesses in India became very easy due to Bookxpert’s accounting services & their owner’s app."</p>
          <cite>Spectrum Power- Mobiles (Hyderabad & Dubai)</cite>
        </div>
        <div className="testimonial">
          <p>"Initially, we had a lot of senior staff working with us but our accounts were still a mess. Now with Bookxpert, my accounts are perfect & accurate."</p>
          <cite>Hinduja Asphalt Corporation (Hyderabad)</cite>
        </div>
        <div className="testimonial">
          <p>"I always thought monitoring all my businesses will be a tough & time consuming job. Thanks to Bookxpert’s owner’s app, now I can check the status of all my business activities with a single click."</p>
          <cite>Veerandar & Co- Food Processing Industry</cite>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#why">WHY BOOKXPERT</a></li>
              <li><a href="#services">OUR SERVICES</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#careers">CAREERS</a></li>
              <li><a href="#blog">BLOG</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>CONTACT US</h4>
            <p>+91 9297889999</p>
            <p>info@bookxpert.co.in</p>
          </div>
          <div className="footer-section">
            <h4>LOCATIONS</h4>
            <p>HYDERABAD</p>
            <p>BENGALURU</p>
            <p>GUNTUR</p>
          </div>
          <div className="footer-section">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <a href="https://instagram.com/book_xpert/">Instagram</a>
              <a href="https://www.linkedin.com/company/bookxpert-pvt-ltd/">LinkedIn</a>
              <a href="https://twitter.com/xpertbook">Twitter</a>
              <a href="https://www.facebook.com/Bookxpert.co.in">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
