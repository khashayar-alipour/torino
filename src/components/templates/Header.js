import styles from "@/components/templates/Header.module.css"
import Link from "next/link"

function Header() {
  return (
    <header className={styles.header}>

        <div className={styles.left}>
            <Link href="/sign-up">ثبت نام</Link>
            <span>|</span>
            <div>
                <Link href="/login">ورود</Link>
                <img src="images/login.svg" alt="login logo" />
            </div>
        </div>

        <div className={styles.right}>
            <div className={styles.navbar}>
            <Link href="/">صفحه اصلی</Link>
            <Link href="/services">خدمات گردشگری</Link>
            <Link href="/about-us">درباره ما</Link>
            <Link href="/contact-us">تماس با ما</Link>
            </div>
            <img src="images/torino-logo.svg" alt="torino logo" />
        </div>

      </header>
  )
}

export default Header