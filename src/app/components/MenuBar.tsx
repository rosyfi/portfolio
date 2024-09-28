import React from "react";
import styles from "../styles/MenuBar.module.css";
import SkillsDropdown from "./content/skill/SkillsDropdown";

interface MenuBarProps {
  onMenuItemClick: (content: number) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ onMenuItemClick }) => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.menuItems}>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            onMenuItemClick(2);
          }}
        >
          <span className={styles.menuItem}>Education</span>
        </button>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            onMenuItemClick(3);
          }}
        >
          <span className={styles.menuItem}>Experience</span>
        </button>
        <div className={styles.menuItemButton}>
          <SkillsDropdown onMenuItemClick={onMenuItemClick} />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
