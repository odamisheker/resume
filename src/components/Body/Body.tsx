import styles from "./Body.module.css";

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
    "Figma",
    "Basic Java",
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
          Take part in the development of the Web3 Start-Up. My task was
          developming the telegram-bot which was used for minting in the
          project. Created a “Thank You” window, redesigned a referral drawer, fix
          UI. Used such technologies as: React + Typescript + Vite, Ton
          Blockchain, Telegram SDK, Telegram Mini Apps, framer-motion and
          other libraries, worked with API.
          <ul>
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
          <div className={styles.subtitle}>AWS</div>
        </div>
        <div className={styles.header}>
          Skills
          <div className={styles.subtitle}>
            Hard skills
            {hardSkills.map((skill, index) => (
              <ul>
                <li className={styles.description} key={index}>
                  {skill}
                </li>
              </ul>
            ))}
          </div>
          <div className={styles.subtitle}>
            Soft skills
            {softSkills.map((skill, index) => (
              <ul>
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
