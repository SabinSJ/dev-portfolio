"use client";

import { useState } from "react";
import Image from "next/image";

import HeaderSection from "../HeaderSection/HeaderSection";
import ProjectModal from "@/components/common/ProjectModal/ProjectModal";
import ProjectImagePreview from "../common/ProjectModal/ProjectImagePreview";

import { projects, type Project } from "@/data/projects";

import styles from "./SelectedProjectsSection.module.css";

const SelectedProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleNextProject = (currentProjectId: string) => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProjectId,
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  return (
    <>
      <div className={`section ${styles.workSection}`} id="work">
        <div className="container">
          <HeaderSection
            title="Selected projects"
            description="A selection of professional products and personal applications I’ve worked on."
          />

          <p className={styles.workGroupHeading}>Professional Work</p>

          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <>
                {project.type === "Personal" &&
                  projects[index - 1]?.type !== "Personal" && (
                    <p className={styles.workGroupHeading}>Personal Projects</p>
                  )}

                <div className={styles.project} key={project.id}>
                  <div
                    className={`${styles.projectImage} ${
                      project.presentationOrientation === "portrait"
                        ? styles.portraitImage
                        : ""
                    }`}
                  >
                    {project.images && (
                      <Image
                        src={project.images[0]}
                        alt={project.name}
                        width={1200}
                        height={800}
                        sizes="(max-width: 700px) 100vw, 58vw"
                        onClick={() => setPreviewImage(project.images![0])}
                      />
                    )}
                  </div>

                  <div className={styles.projectCopy}>
                    <h3>{project.name}</h3>

                    <p>{project.summary}</p>

                    <button
                      className={styles.buttonLink}
                      onClick={() => setSelectedProject(project)}
                      type="button"
                    >
                      View project details
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={() => {
            handleNextProject(selectedProject.id);
          }}
        />
      )}

      {previewImage && (
        <ProjectImagePreview
          image={previewImage}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </>
  );
};

export default SelectedProjectsSection;
