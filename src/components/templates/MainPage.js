import SearchBar from "../modules/SearchBar"
import Styles from "./MainPage.module.css"

function MainPage() {
  return (
    <div className={Styles.container}>
        <img src="/images/main-page.svg" alt="main page banner" />
        <p><span>تورینو</span> برگزار کننده بهترین تورهای داخلی و خارجی </p>
        <SearchBar/>
        
    </div>
  )
}

export default MainPage