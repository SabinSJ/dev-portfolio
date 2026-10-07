import Image from "next/image";

import styles from "./ProjectModal.module.css";

interface ProjectImagePreviewProps {
  image: string;
  projectName?: string;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

const ProjectImagePreview = ({
  image,
  projectName,
  onClose,
  onPrevious,
  onNext,
}: ProjectImagePreviewProps) => {
  return (
    <div
      className={styles.imagePreview}
      onMouseDown={onClose}
      role="button"
      tabIndex={0}
      aria-label="Close image preview"
    >
      {onPrevious && (
        <button
          className={styles.previewNavigationButton}
          onMouseDown={(event) => event.stopPropagation()}
          onClick={onPrevious}
          aria-label="Previous screenshot"
          type="button"
        >
          ←
        </button>
      )}

      <div
        className={styles.imagePreviewContent}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <Image
          onMouseDown={onClose}
          src={image}
          alt={`${projectName} screenshot`}
          fill
          sizes="90vw"
        />
      </div>

      {onNext && (
        <button
          className={styles.previewNavigationButton}
          onMouseDown={(event) => event.stopPropagation()}
          onClick={onNext}
          aria-label="Next screenshot"
          type="button"
        >
          →
        </button>
      )}
    </div>
  );
};

export default ProjectImagePreview;
