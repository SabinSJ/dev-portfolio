import styles from './Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.type}>Fullstack Developer</p>
        <h1 className={styles.title}>Hi, I'm Sabin!</h1>
        {/* <h1 className={styles.title}>Fullstack Developer</h1> */}
        <p className={styles.description}>
            Hi there! I'm a Fullstack Developer with over 3 years of experience building modern, responsive web applications. I work with React, Next.js, TypeScript, and GraphQL, and prefer scalable backend solutions using Node.js. I enjoy delivering user-friendly apps, collaborating in agile teams, and constantly exploring new technologies.
        </p>
        {/* <a href="/cv.pdf" download className={styles.button}>
          Download CV
        </a> */}
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>
            View CV
        </a>
      </div>

      <div className={styles.right}>
        <Image
          src="/images/me1.jpeg"
          alt="Poza mea"
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
    </section>
  )
}
