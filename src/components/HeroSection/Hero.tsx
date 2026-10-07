"use client";

import { useState } from "react";
import Image from "next/image";

import { contactInfo } from "@/data/contact";

import CvModal from "../common/CVModal/CvModal";

import styles from "./Hero.module.css";

const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <div className={styles.hero} id="top">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <p className={styles.heroName}>Florin-Sabin Sarca</p>

            <h1>
              Full Stack
              <br />
              Developer<span>.</span>
            </h1>

            <p className={styles.heroDescription}>
              I build and extend real-world web products across the frontend and
              backend, from user interfaces and APIs to business logic and data.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#work">
                View projects
              </a>

              <button
                className={styles.secondaryButton}
                onClick={() => setCvOpen(true)}
              >
                View CV
              </button>

              <a className={styles.secondaryButton} href="#contact">
                Contact me
              </a>
            </div>

            <div className={styles.heroLinks}>
              <a
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/github.svg"
                  alt="GitHub Logo"
                  width={20}
                  height={20}
                />
                GitHub
              </a>

              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.svg"
                  alt="LinkedIn Logo"
                  width={20}
                  height={20}
                />
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/images/hero.svg"
              alt=""
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>

      {cvOpen && <CvModal onClose={() => setCvOpen(false)} />}
    </>
  );
};

export default Hero;
