'use client';

import Link from 'next/link';
import Logo from './logo';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faCamera, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex flex-wrap items-center justify-around p-5 bg-primary">
      <Link href="/" className="hover:scale-105 transition duration-300">
        <Logo />
      </Link>
      <button
        className="block md:hidden text-primary-foreground focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
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
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          ></path>
        </svg>
      </button>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full md:flex md:items-center md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row md:gap-5 text-primary-foreground md:items-center">
          <li className="mt-3 md:mt-0">
            <Link
              href="/posts"
              className="flex items-center gap-2 hover:opacity-70 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faBlog} /> Posts
            </Link>
          </li>
          <li className="mt-3 md:mt-0">
            <Link
              href="/about"
              className="flex items-center gap-2 hover:opacity-70 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faCamera} /> Albums
            </Link>
          </li>
          <li className="mt-3 md:mt-0">
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:opacity-70 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faUser} /> Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
