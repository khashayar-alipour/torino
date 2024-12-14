import styles from "@/components/templates/Footer.module.css"
import Link from "next/link"

function Footer() {
  return (
    
    <footer className={styles.footer}>
    <div className={styles.upper}>

        <div className={styles.left_side}>
            <img src="/images/torino-logo.svg" alt="torino logo" />
            <p>تلفن پشتیبانی: 000</p>
            <div className={styles.cooperations}>
                <img src="/images/aira-co.svg" alt="torino co" />
                <img src="/images/ecunion-co.svg" alt="torino co" />
                <img src="/images/passenger-rights-co.svg" alt="torino co" />
                <img src="/images/samandehi-co.svg" alt="torino co" />
                <img src="/images/state-airline-co.svg" alt="torino co" />
            </div>
        </div>

        <div className={styles.right_side}>
            <div className={styles.services}>
                <h1>خدمات مشتریان</h1>
                <Link href="/about-us">پشتیبانی آنلاین</Link>
                <Link href="/contact-us">راهنمای خرید</Link>
                <Link href="/why-torino">راهنمای استرداد</Link>
                <Link href="/travel-insurance">پرسش و پاسخ</Link>
            </div>
            <div className={styles.torino}>
                <h1>تورینو</h1>
                <Link href="/about-us">درباره ما</Link>
                <Link href="/contact-us">تماس با ما</Link>
                <Link href="/why-torino">چرا تورینو</Link>
                <Link href="/travel-insurance">بیمه مسافرتی</Link>
            </div>
        </div>

    </div>

    <div className={styles.lower}>
        <p>کلیه حقوق این وبسایت متعلق به تورینو می‌باشد</p>
    </div>
  </footer>

  )
}

export default Footer