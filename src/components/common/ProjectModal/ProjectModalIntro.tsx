import type { Project } from "@/data/projects";

import styles from "./ProjectModal.module.css";

interface ProjectModalIntroProps {
  project: Project;
}

const ProjectModalIntro = ({ project }: ProjectModalIntroProps) => {
  return (
    <header className={styles.caseIntro}>
      <h2 id="case-title">{project.name}</h2>

      <p>{project.summary}</p>

      <div className={styles.caseMeta}>
        {project.role && <span>{project.role}</span>}
        {project.period && <span>{project.period}</span>}
      </div>
    </header>
  );
};

export default ProjectModalIntro;
