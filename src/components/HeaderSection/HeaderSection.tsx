import styles from "./HeaderSection.module.css";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

const HeaderSection = ({ eyebrow, title, description }: Props) => {
  return (
    <div className={styles.sectionHeading}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className={styles.sectionHeadingRow}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default HeaderSection;
