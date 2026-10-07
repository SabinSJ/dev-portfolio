"use client";

import { useEffect } from "react";

import styles from "./CvModal.module.css";

interface CvModalProps {
  onClose: () => void;
}

const CvModal = ({ onClose }: CvModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2>Curriculum Vitae</h2>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close CV"
            >
              ×
            </button>
          </div>
        </div>

        <div className={styles.preview}>
          <iframe
            src="/Sarca_Florin_Sabin_Fullstack_Developer_CV.pdf"
            title="Florin-Sabin Sarca CV"
          />
        </div>
      </div>
    </div>
  );
};

export default CvModal;
