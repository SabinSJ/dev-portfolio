import { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
  large?: boolean;
}

const ProjectImage = ({ project, index, large }: Props) => {
  return (
    <div
      className={`project-image project-image-${index + 1} ${large ? "project-image-large" : ""}`}
      role="img"
      aria-label={`${project.name} image placeholder`}
    />
  );
};

export default ProjectImage;
