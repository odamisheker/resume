import { BsTelegram } from "react-icons/bs";
import styles from "./Header.module.css";
import { FaGithub } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.myInfo}>
        <a className={styles.name}>Egor Klimov</a>
        <a className={styles.specialty}>Intern DevOps Engineer</a>
        <div className={styles.photo}></div>
      </div>
      <div className={styles.socials}>
        <div
          className={styles.telegram}
          onClick={() => {
            window.location.href = "https://t.me/odamisheker";
          }}
        >
          <BsTelegram className={styles.icon} />
          @odamisheker
        </div>
        <div
          className={styles.github}
          onClick={() => {
            window.location.href = "https://github.com/odamisheker";
          }}
        >
          <FaGithub className={styles.icon} />
          @odamisheker
        </div>
        <div className={styles.location}>
          <MdLocationOn className={styles.icon} />
          Minsk, Belarus
        </div>
        {/* <div className={styles.email}>
          <MdEmail className={styles.icon}/>
          odamisheker@proton.me
        </div> */}
      </div>
    </div>
  );
}
