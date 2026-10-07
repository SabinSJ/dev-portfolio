import Image from "next/image";

import { contactInfo } from "@/data/contact";

import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={`container ${styles.contactInner}`}>
        <h2>Have a project or opportunity in mind?</h2>

        <p>
          {
            "I'm always open to a thoughtful conversation about product work, engineering, or a potential collaboration."
          }
        </p>

        <a
          className={styles.primaryButton}
          href={`mailto:${contactInfo.email}`}
        >
          Get in touch
        </a>

        <div className={styles.contactLinks}>
          <a className={styles.link} href={`mailto:${contactInfo.email}`}>
            <Image
              src="/images/icons/email.svg"
              alt="Email Icon"
              width={16}
              height={16}
            />
            {contactInfo.email}
          </a>

          <a
            className={styles.link}
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
            className={styles.link}
            href={contactInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/linkedin.svg"
              alt="Linkedin Logo"
              width={20}
              height={20}
            />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
