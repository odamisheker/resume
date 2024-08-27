import Header from "./components/Header/Header";
import styles from "./App.module.css"
import Body from "./components/Body/Body";
import { FaRegFilePdf } from "react-icons/fa6";
import PDFResume from "../public/Resume.pdf"

export default function App() {

  return(
    <div className={styles.container}>
      <Header/>
      <hr className={styles.line}/>
      <Body/>
      <hr className={styles.line2}/>
      <a className={styles.pdf} href={PDFResume} target="_blank" rel="noreferrer"><FaRegFilePdf className={styles.icon}/></a>
    </div>
  )
}