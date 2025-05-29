import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // State to track if the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu open/close state
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the mobile menu (used when a nav link is clicked)
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-black text-gold p-4 shadow-md sticky top-0 z-50">
      {/* Container to center content and apply flexbox for layout */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand name which navigates to home on click */}
        <NavLink
          to="/"
          end
          onClick={closeMenu} // Close mobile menu when clicking logo
          className={({ isActive }) =>
            (isActive ? "border-b-2 border-gold font-semibold " : "") +
            "text-2xl font-bold flex items-center"
          }
        >
          Werkskapelle Zeltweg
          <img
            src="/images/wkz_logo.png"
            alt="Werkskapelle Zeltweg Logo"
            className="ml-2 rounded shadow-lg"
            style={{ maxWidth: "40px", height: "auto" }}
          />
        </NavLink>

        {/* Hamburger button - only visible on small screens (hidden on lg and above) */}
        <button
          onClick={toggleMenu} // Toggle menu visibility on click
          className="lg:hidden text-gold focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Close icon (X) shown when menu is open
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon shown when menu is closed
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation links container */}
        <ul
          className={`
                     flex-col lg:flex-row lg:flex lg:space-x-6
                     absolute lg:static top-full left-0 w-full bg-black lg:bg-transparent
                     transition-max-height duration-300 ease-in-out
                     overflow-hidden lg:overflow-visible
                     ${menuOpen ? "max-h-60" : "max-h-0 lg:max-h-full"}
                     lg:ml-auto       /* schiebt ul nach rechts */
                     lg:justify-end   /* richtet Items rechts aus */
                   `}
        >
          {/* Each nav item closes the mobile menu on click */}
          <li>
            <NavLink
              to="/members"
              onClick={closeMenu}
              className={({ isActive }) =>
                (isActive
                  ? "border-b-2 border-gold font-semibold"
                  : "hover:border-b-2 hover:border-gold") +
                " block px-4 py-2 lg:p-0"
              }
            >
              Mitglieder
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calendar"
              onClick={closeMenu}
              className={({ isActive }) =>
                (isActive
                  ? "border-b-2 border-gold font-semibold"
                  : "hover:border-b-2 hover:border-gold") +
                " block px-4 py-2 lg:p-0"
              }
            >
              Termine
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              onClick={closeMenu}
              className={({ isActive }) =>
                (isActive
                  ? "border-b-2 border-gold font-semibold"
                  : "hover:border-b-2 hover:border-gold") +
                " block px-4 py-2 lg:p-0"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/internal"
              onClick={closeMenu}
              className={({ isActive }) =>
                (isActive
                  ? "border-b-2 border-gold font-semibold"
                  : "hover:border-b-2 hover:border-gold") +
                " block px-4 py-2 lg:p-0"
              }
            >
              Intern
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
