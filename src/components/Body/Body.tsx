import styles from "./Body.module.css";
import headerStyles from "../Header/Header.module.css";

export default function Body() {
  const hardSkills = [
    "Git",
    "React",
    "JavaScript (basic TypeScript)",
    "Basic C/C++",
    "Bash",
    "HTML + CSS",
    "Networks",
    "Microsoft SQL Server",
    "MondoDB",
    "Basic Python",
  ];

  const softSkills = [
    "Good time management",
    "Effective communication",
    "Friendliness",
    "Good sociability"
  ]
  
  return (
    <div className={headerStyles.container}>
      <div className={styles.contents}>
        Work Experience
        <div className={styles.specialty}>
          Front-End developer
          <a
            className={styles.workplace}
            onClick={() => {
              window.location.href = "https://rent-tycoon.com/";
            }}
          >
            Rent Tycoon | June 2024 - Aug 2024
          </a>
        </div>
        <div className={styles.description}>
          Take part in the development of the Web3 Start-Up. Used such
          technologies as: React + Typescript + Vite, Telegram SDK, Telegram
          Mini Apps, framer-motion and other libraries. Made a “Thank You”
          window, redesigned a referral drawer, fix UI, worked with API.
          <ul>
            <li>Refactoring of the code.</li>
            <li>Add new features.</li>
          </ul>
        </div>
      </div>
      <div className={styles.addInfo}></div>
    </div>
  );
}