import { BsTelegram } from "react-icons/bs";
import styles from "./Header.module.css";
import { FaGithub } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.myInfo}>
        <a className={styles.name}>Egor Klimov</a>
        <a className={styles.specialty}>Intern Front-end developer</a>
        <div className={styles.myPhoto}>
          <div className={styles.photo}></div>
          <a className={styles.myDesc}>
            Hi! I'm a 19-years old student of BSU, Faculty of Mechanics and
            Mathematics, who is looking for an internship in Front-end. Also I'm
            interested in the DevOps field. I work well in teams and in large
            groups. My goal is to apply all my knowledge and skills to solve the
            problem and also gain new knowledge and skills which I'll use in the
            future.
          </a>
        </div>
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
          <MdLocationOn className={styles.iconMap} />
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
