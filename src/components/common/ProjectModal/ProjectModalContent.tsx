import type { Project } from "@/data/projects";

import styles from "./ProjectModal.module.css";

interface ProjectModalContentProps {
  project: Project;
}

const ProjectModalContent = ({ project }: ProjectModalContentProps) => {
  return (
    <div className={styles.caseContent}>
      <section>
        <h3>Overview</h3>
        <p>{project.description}</p>
      </section>

      <section>
        <h3>Technologies</h3>
        <p>{project.technologies.join(" · ")}</p>
      </section>
    </div>
  );
};

export default ProjectModalContent;
