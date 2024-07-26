import React from "react";
import styles from "../styles/MenuBar.module.css";
import { useRouter } from "next/navigation";
import SkillsDropdown from "./SkillsDropdown";

const MenuBar = () => {
  const router = useRouter();
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.menuItems}>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            router.push("/about");
          }}
        >
          <span className={styles.menuItem}>About</span>
        </button>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            router.push("/education");
          }}
        >
          <span className={styles.menuItem}>Education</span>
        </button>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            router.push("/experience");
          }}
        >
          <span className={styles.menuItem}>Experience</span>
        </button>
        <div className={styles.menuItemButton}>
          <SkillsDropdown />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
