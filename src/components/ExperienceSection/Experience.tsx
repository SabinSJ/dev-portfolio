import HeaderSection from "../HeaderSection/HeaderSection";
import { projects } from "@/data/projects";
import styles from "./Experience.module.css";

const Experience = () => {
  const experience = projects.filter(
    (project) => project.type === "Professional",
  );

  return (
    <section className={`section ${styles.experienceSection}`} id="experience">
      <div className="container">
        <HeaderSection title="Experience" />

        <div className={styles.experienceList}>
          {experience.map((project) => (
            <article key={project.id}>
              <div className={styles.experienceMeta}>
                <span>{project.name}</span>
                {project.period && <span>{project.period}</span>}
              </div>

              <div className={styles.experienceBody}>
                <h3>{project.role}</h3>

                <p>{project.description}</p>

                <p className={styles.experienceTech}>
                  {project.technologies.join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
