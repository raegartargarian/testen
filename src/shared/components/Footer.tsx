// src/shared/components/Footer.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", formData);
    // Handle newsletter signup here
    alert("Thank you for signing up for updates!");
    setFormData({ firstName: "", lastName: "", email: "" });
  };

  return (
    <footer className="footer-main">
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container mx-auto px-4">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="newsletter-title">STAY IN THE LOOP</h2>
              <p className="newsletter-description">
                Sign up with your email address to receive film updates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input form-input-email"
                  required
                />
                <button type="submit" className="form-submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="footer-content">
        <div className="container mx-auto px-4">
          <div className="footer-grid">
            {/* Logo and Info */}
            <div className="footer-brand">
              <div className="footer-logo">
                FOLLOWING <span className="footer-logo-harry">Harry</span>
              </div>
              <div className="footer-navigation">
                <h3 className="footer-nav-title">Navigation</h3>
                <nav className="footer-nav">
                  <Link to="/" className="footer-nav-link">
                    HOME
                  </Link>
                  <Link to="/about" className="footer-nav-link">
                    ABOUT
                  </Link>
                  <Link to="/see-the-film" className="footer-nav-link">
                    SEE THE FILM
                  </Link>
                  <Link to="/get-involved" className="footer-nav-link">
                    GET INVOLVED
                  </Link>
                  <Link to="/filmmakers" className="footer-nav-link">
                    FILMMAKERS
                  </Link>
                  <Link to="/press" className="footer-nav-link">
                    PRESS
                  </Link>
                  <Link to="/store" className="footer-nav-link">
                    STORE
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Following Harry. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
