import styles from "./Body.module.css";
import AdvancedTesting from "./certificates/AdvancedTesting.pdf";
import CLI from "./certificates/CLI.pdf";
import GettingStarted from "./certificates/GettingStarted.pdf";
import ImproveCodeQuality from "./certificates/ImproveCodeQuality.pdf";

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
    "MongoDB",
    "Basic Python",
    "Figma",
    "Basic Java",
    "Linux",
  ];

  const softSkills = [
    "Good time management",
    "Effective communication",
    "Friendliness",
    "Good sociability",
  ];

  return (
    <div className={styles.container}>
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
          Took part in the development of the Web3 Start-Up. My task was
          developing a Telegram-bot which was used for minting in the
          project. Created a “Thank You” window, redesigned a referral drawer
          and fixed various UI issues. Used such technologies as: React +
          Typescript + Vite, Ton Blockchain, Telegram SDK, Telegram Mini Apps,
          framer-motion and other libraries, worked with API.
          <ul className={styles.list}>
            <li>Refactoring of the code.</li>
            <li>Add new features.</li>
            <li>Designing user interfaces.</li>
            <li>Optimization</li>
            <li>Cross-browser and adaptive layout</li>
          </ul>
        </div>
      </div>
      <div className={styles.addInfo}>
        <div className={styles.header}>
          Education
          <div className={styles.subtitle}>Belarussian State University</div>
          <div className={styles.uniSpecialty}>
            Mathematics and Information Technology
          </div>
          <div className={styles.eduTerms}>2022 - present</div>
        </div>
        <div className={styles.header}>
          Certificates
          <div className={styles.subtitle}>
            AWS
            <div className={styles.certList}>
              <a
                href={CLI}
                target="_blank"
                rel="noreferrer"
                className={styles.cert}
              >
                AWS Command Line Interface (CLI) Basics
              </a>
              <a
                href={AdvancedTesting}
                target="_blank"
                rel="noreferrer"
                className={styles.cert}
              >
                Advanced Testing Practices Using AWS DevOps Tools
              </a>
              <a
                href={GettingStarted}
                target="_blank"
                rel="noreferrer"
                className={styles.cert}
              >
                Getting Started with DevOps on AWS
              </a>
              <a
                href={ImproveCodeQuality}
                target="_blank"
                rel="noreferrer"
                className={styles.cert}
              >
                Improve Code Quality with Amazon CodeGuru Reviewer
              </a>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          Skills
          <div className={styles.subtitle}>
            Hard skills
            {hardSkills.map((skill, index) => (
              <ul className={styles.list}>
                <li className={styles.description} key={index}>
                  {skill}
                </li>
              </ul>
            ))}
          </div>
          <div className={styles.subtitle}>
            Soft skills
            {softSkills.map((skill, index) => (
              <ul className={styles.list}>
                <li className={styles.description} key={index}>
                  {skill}
                </li>
              </ul>
            ))}
          </div>
          <div className={styles.header}>
            Languages
            <div className={styles.subtitle}>Russian (Native)</div>
            <div className={styles.subtitle}>English (B1)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
