import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter hook for active link detection
import logo from "/public/images/navbar_logo.svg";

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Get the current route

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-main mt-3">
      <div className="container d-flex justify-content-between align-items-center nav-container">
        {/* Brand Logo on the left */}
        <Link href="/" className="navbar-brand">
          <Image src={logo} alt="Brand Logo" />
        </Link>

        {/* Toggler on the right side */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarsExample10"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarsExample10"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${
                  router.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/pricing"
                className={`nav-link ${
                  router.pathname === "/pricing" ? "active" : ""
                }`}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/how-it-works"
                className={`nav-link ${
                  router.pathname === "/how-it-works" ? "active" : ""
                }`}
              >
                How it Works
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/contact-us"
                className={`nav-link ${
                  router.pathname === "/contact-us" ? "active" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link
            href="/get-started"
            className="nav-item get-started text-decoration-none"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
