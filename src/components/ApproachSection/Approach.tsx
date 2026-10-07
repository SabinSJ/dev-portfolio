import { approaches } from "@/data/approaches";
import styles from "./Approach.module.css";

const Approach = () => {
  return (
    <section className={styles.approachSection}>
      <div className={`container ${styles.approachLayout}`}>
        <div>
          <h2>How I work</h2>
        </div>

        <div className={styles.principles}>
          {approaches.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
