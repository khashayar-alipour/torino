import styles from "./SearchBar.module.css"

import Location from "../icons/Location"
import GlobalSearch from "../icons/GlobalSearch"
import Calender from "../icons/Calender"

function SearchBar() {
  return (
    <div className={styles.container}>
        <button>جستجو</button>
        <div className={styles.calender}>
            <p>تاریخ</p>
            <Calender/>
        </div>
        <div className={styles.destination}>
            <p>مقصد</p>
            <GlobalSearch/>
        </div>
        <div className={styles.origin}>
            <p>مبدا</p>
            <Location className={styles.icon}/>
        </div>
    </div>
  )
}

export default SearchBar