import Image from "next/image";

import ProjectGalleryControls from "./ProjectGalleryControls";

import styles from "./ProjectModal.module.css";

interface ProjectGalleryProps {
  projectName: string;
  images: string[];
  slide: number;
  onPrevious: () => void;
  onNext: () => void;
  onPreview: (image: string) => void;
}

const ProjectGallery = ({
  projectName,
  images,
  slide,
  onPrevious,
  onNext,
  onPreview,
}: ProjectGalleryProps) => {
  const currentImage = images[slide];

  if (!currentImage) {
    return null;
  }

  return (
    <div className={styles.caseGallery}>
      <div className={styles.galleryImage}>
        <button
          className={styles.galleryImageButton}
          onClick={() => onPreview(currentImage)}
          aria-label={`View screenshot ${slide + 1} fullscreen`}
          type="button"
        >
          <Image
            src={currentImage}
            alt={`${projectName} screenshot ${slide + 1}`}
            fill
            sizes="(max-width: 700px) 100vw, 58vw"
            className={styles.galleryImageContent}
          />
        </button>
      </div>

      <ProjectGalleryControls
        current={slide}
        total={images.length}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
};

export default ProjectGallery;
