import Header from "./components/Header/Header";
import styles from "./App.module.css"
import Body from "./components/Body/Body";

export default function App() {

  return(
    <div className={styles.container}>
      <Header/>
      <hr className={styles.line}/>
      <Body/>
      <hr className={styles.line2}/>
    </div>
  )
}