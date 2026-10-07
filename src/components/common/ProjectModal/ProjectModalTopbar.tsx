import { RefObject } from "react";

import styles from "./ProjectModal.module.css";

interface ProjectModalTopbarProps {
  projectType: string;
  closeRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

const ProjectModalTopbar = ({
  projectType,
  closeRef,
  onClose,
}: ProjectModalTopbarProps) => {
  return (
    <div className={styles.modalTopbar}>
      <span>{projectType} Project</span>

      <button
        ref={closeRef}
        className={styles.iconButton}
        onClick={onClose}
        aria-label="Close project details"
        type="button"
      >
        ×
      </button>
    </div>
  );
};

export default ProjectModalTopbar;
