import React from "react";
import styles from "../styles/MenuBar.module.css";
import SkillsDropdown from "./content/skill/SkillsDropdown";

interface MenuBarProps {
  onMenuItemClick: (content: number, path: string) => void;
}

//when menuItem was clicked stay on hover modus

const MenuBar: React.FC<MenuBarProps> = ({ onMenuItemClick }) => {
  return (
    <div className={`container ${styles.menuItemsContainer}`}>
      <div className={styles.menuItems}>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            onMenuItemClick(1, "rossellafilocomo/about");
          }}
        >
          <span className={styles.menuItem}>About</span>
        </button>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            onMenuItemClick(2, "rossellafilocomo/education");
          }}
        >
          <span className={styles.menuItem}>Education</span>
        </button>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            onMenuItemClick(3, "rossellafilocomo/experience");
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
