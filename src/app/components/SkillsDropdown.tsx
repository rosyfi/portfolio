"use client ";
import React, { useState } from "react";
import styles from "../styles/SkillsDropdown.module.css";
import { useRouter } from "next/navigation";

//TODO: Allgemeine componente daraus machen

const SkillsDropDown = () => {
  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);

  const onMouseEnter = () => {
    setShowDropdown(true);
  };

  const onMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={styles.menuItem}>Skills</span>
      {showDropdown && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownContent}>
            <div className={styles.dropdownItem}>
              <button
                className={styles.dropdownButton}
                onClick={() => {
                  router.push("/skills/hard");
                }}
              >
                <span className="name">Hard</span>
              </button>
            </div>
            <div className={styles.dropdownItem}>
              <button
                className={styles.dropdownButton}
                onClick={() => {
                  router.push("/skills/soft");
                }}
              >
                <span className="name">Soft</span>
              </button>
            </div>
            <div className={styles.dropdownItem}>
              <button
                className={styles.dropdownButton}
                onClick={() => {
                  router.push("/skills/langauge");
                }}
              >
                <span className="name">Language</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsDropDown;
