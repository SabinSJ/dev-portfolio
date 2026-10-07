"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./navbar.module.css";

const navigation = [
  ["About", "#about"],
  ["Projects", "#work"],
  ["Experience", "#experience"],
  ["Stack", "#stack"],
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.siteHeader}>
      <div className={`container ${styles.headerInner}`}>
        <a className={styles.wordmark} href="#top">
          <Image
            src="/images/icons/logo.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </a>

        <nav
          className={menuOpen ? styles.navOpen : ""}
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}

          <a
            className={styles.mobileContact}
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>

        <a className={styles.headerContact} href="#contact">
          {"Let's talk"}
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <Image
            src="/images/icons/hamburger.svg"
            alt=""
            width={22}
            height={22}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
