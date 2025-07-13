'use client'

import data from './../../../public/skills.json'
import styles from './Skills.module.css'

export default function Skills() {
  const heading = Object.keys(data)[0]

  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.heading}>{heading}</h1>
      {/* <div className={styles.grid}> */}
        {Object.entries(data.Skills).map(([category, skills]) => (
          <div key={category} className={styles.cards}>
            <div className={styles.cardHeaders}>{category}</div>
            <div className={styles.badges}>
              {skills.map((skill) => (
                <span key={skill} className={styles.badge}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      {/* </div> */}
    </section>
  )
}