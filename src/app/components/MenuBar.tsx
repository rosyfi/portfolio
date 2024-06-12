import React from "react";

import styles from "./MenuBar.module.css";

interface MenuBarProps {
  updatePath: (newPath: string) => void;
  updateContent: (newContent: string) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ updatePath, updateContent }) => {
  return (
    <div className={`container ${styles.menuItemsContainer}`}>
      <div className={styles.menuItems}>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            updateContent("content1");
            updatePath("rossellafilocomo/about");
          }}
        >
          <span className={styles.menuItem}>About</span>
        </button>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            updateContent("content2");
            updatePath("rossellafilocomo/education");
          }}
        >
          <span className={styles.menuItem}>Education</span>
        </button>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            updateContent("content3");
            updatePath("rossellafilocomo/experience");
          }}
        >
          <span className={styles.menuItem}>Experience</span>
        </button>
        <button
          type="button"
          className={styles.menuItemButton}
          onClick={() => {
            updateContent("content4");
            updatePath("rossellafilocomo/skills");
          }}
        >
          <span className={styles.menuItem}>Skills</span>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
