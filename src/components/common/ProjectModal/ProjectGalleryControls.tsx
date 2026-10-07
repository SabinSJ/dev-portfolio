import styles from "./ProjectModal.module.css";

interface ProjectGalleryControlsProps {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}

const ProjectGalleryControls = ({
  current,
  total,
  onPrevious,
  onNext,
}: ProjectGalleryControlsProps) => {
  return (
    <div className={styles.galleryControls}>
      <span>
        {current + 1} of {total}
      </span>

      <div className={styles.galleryNavigation}>
        <button
          className={styles.iconButton}
          onClick={onPrevious}
          aria-label="Previous screenshot"
          type="button"
        >
          ←
        </button>

        <button
          className={styles.iconButton}
          onClick={onNext}
          aria-label="Next screenshot"
          type="button"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ProjectGalleryControls;
