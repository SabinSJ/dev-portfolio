import { about } from "@/data/about";
import HeaderSection from "../HeaderSection/HeaderSection";

import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={`section ${styles.aboutSection}`}>
      <div className="container">
        <HeaderSection title="About me" />
        <div className={styles.aboutLayout}>
          <p className={styles.aboutLead}>{about.lead}</p>
          <div className={styles.aboutCopy}>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p className={styles.aboutNote}>
              <strong>{about.note.value}</strong> {about.note.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
