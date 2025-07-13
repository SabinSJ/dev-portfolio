'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" style={{display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", gap: '20px' }}>
            <Image
                src="/images/logo.svg"
                alt="logo"
                width={60}
                height={60}
                className={styles.image}
            />

            <p>
                SabinSJ
            </p>
        </Link>
      </div>

      <nav className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
