import styles from "./ProjectModal.module.css";

interface ProjectModalFooterProps {
  onNext: () => void;
}

const ProjectModalFooter = ({ onNext }: ProjectModalFooterProps) => {
  return (
    <footer className={styles.caseFooter}>
      <strong>Continue through the selected projects.</strong>

      <button className={styles.primaryButton} onClick={onNext} type="button">
        Next project →
      </button>
    </footer>
  );
};

export default ProjectModalFooter;
