import React from "react";
import styles from "../../styles/skills/hard/HardSkill.module.css";
import HardSkillCard from "./HardSkillCard";
import HardSkillProgressBar from "./HardSkillProgressBar";

export default function HardSkill() {
  return (
    <div className={`container col-11 ${styles.container}`}>
      <div className={styles.cardContent}>
        <HardSkillProgressBar title={"Software Development"} percentage={60} />
        <div className={styles.cardsWrapper}>
          <HardSkillCard
            title={"Frontend"}
            tools={[
              "NextJS",
              "React",
              "Angular",
              "Ionic",
              "Bootstrap",
              "HTML",
              "JavaScript",
              "TypeScript",
              "CSS",
            ]}
          />
          <HardSkillCard
            title={"Backend"}
            tools={["SpringBoot", "Java", "Maven", "RestAPI", "OpenAPI"]}
          />
          <HardSkillCard
            title={"Database"}
            tools={["MongoDB", "DBM", "MySQL"]}
          />
          <HardSkillCard
            title={"DevOps"}
            tools={["Git", "Jenkins", "Sonarqube", "IntelliJ", "VS Code"]}
          />
        </div>
      </div>

      <div className={styles.cardsContent}>
        <div className={styles.cardContent}>
          <HardSkillProgressBar title={"UX/UI"} percentage={70} />
          <div className={styles.cardsWrapper}>
            <HardSkillCard title={"Figma"} tools={[]} />
          </div>
        </div>
        <div className={styles.cardContent}>
          <HardSkillProgressBar title={"Business Analyst"} percentage={80} />
          <div className={styles.cardsWrapper}>
            <HardSkillCard title={"BMPN"} tools={[]} />
            <HardSkillCard title={"ERP"} tools={[]} />
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <HardSkillProgressBar
          title={"Requirements Management"}
          percentage={90}
        />
        <div className={styles.cardsWrapper}>
          <HardSkillCard title={"Jira"} tools={[]} />
          <HardSkillCard title={"Confluence"} tools={[]} />
          <HardSkillCard title={"Scrum"} tools={[]} />
        </div>
      </div>
    </div>
  );
}
