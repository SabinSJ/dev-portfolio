import { skillsData } from "@/data/skills";
import styles from "./skills.module.css";

const Skills = () => {
  const heading = Object.keys(skillsData)[0];

  return (
    <section className={`section ${styles.stackSection}`} id="stack">
      <div className="container">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>What I work with</p>

          <h2>{heading}</h2>
        </div>

        <div className={styles.stackList}>
          {Object.entries(skillsData.Technologies).map(([category, skills]) => (
            <div key={category} className={styles.stackItem}>
              <h3>{category}</h3>
              <p>{skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
