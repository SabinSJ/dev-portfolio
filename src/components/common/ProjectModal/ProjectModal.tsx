"use client";

import { useEffect, useRef, useState } from "react";

import type { Project } from "@/data/projects";

import ProjectModalTopbar from "./ProjectModalTopbar";
import ProjectModalIntro from "./ProjectModalIntro";
import ProjectGallery from "./ProjectGallery";
import ProjectImagePreview from "./ProjectImagePreview";
import ProjectModalContent from "./ProjectModalContent";
import ProjectModalFooter from "./ProjectModalFooter";

import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
}

const ProjectModal = ({ project, onClose, onNext }: ProjectModalProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [slide, setSlide] = useState(0);

  const closeRef = useRef<HTMLButtonElement>(null);

  const images = project.images ?? [];
  const imageCount = images.length;

  useEffect(() => {
    setSlide(0);
  }, [project.id]);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previous?.focus();
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (!imageCount) return;

    setSlide((current) => (current - 1 + imageCount) % imageCount);
  };

  const handleNext = () => {
    if (!imageCount) return;

    setSlide((current) => (current + 1) % imageCount);
  };

  return (
    <div className={styles.modalBackdrop} onMouseDown={handleBackdropClick}>
      <div
        className={styles.caseModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
      >
        <ProjectModalTopbar
          projectType={project.type}
          closeRef={closeRef}
          onClose={onClose}
        />

        <div className={styles.modalScroll}>
          <div className={styles.modalInner}>
            <ProjectModalIntro project={project} />

            <ProjectGallery
              projectName={project.name}
              images={images}
              slide={slide}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onPreview={setPreviewImage}
            />

            <ProjectModalContent project={project} />
          </div>

          <ProjectModalFooter onNext={onNext} />
        </div>
      </div>

      {previewImage && (
        <ProjectImagePreview
          image={images[slide]}
          projectName={project.name}
          onClose={() => setPreviewImage(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default ProjectModal;
