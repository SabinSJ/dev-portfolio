import Image from "next/image";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <a className={styles.wordmark} href="#top">
          <Image
            src="/images/icons/logo.png"
            alt="Logo"
            width={72}
            height={72}
          />
        </a>
        <span>© 2026 Florin-Sabin Sarca</span>
      </div>
    </footer>
  );
};

export default Footer;
