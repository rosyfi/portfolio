import React, { useState } from "react";

import styles from "./styles/SkillsDropdown.module.css";

interface SkillsDropDownProps {
  onMenuItemClick: (content: number, path: string) => void;
}

const SkillsDropDown: React.FC<SkillsDropDownProps> = ({ onMenuItemClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const onMouseEnter = () => {
    setShowDropdown(true);
  };

  const onMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.menuItemButton}
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
                    onMenuItemClick(4, "rossellafilocomo/hardskills");
                  }}
                >
                  <span className="name">Hard</span>
                </button>
              </div>
              <div className={styles.dropdownItem}>
                <button
                  className={styles.dropdownButton}
                  onClick={() => {
                    onMenuItemClick(5, "rossellafilocomo/softskills");
                  }}
                >
                  <span className="name">Soft</span>
                </button>
              </div>
              <div className={styles.dropdownItem}>
                <button
                  className={styles.dropdownButton}
                  onClick={() => {
                    onMenuItemClick(6, "rossellafilocomo/language");
                  }}
                >
                  <span className="name">Language</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default SkillsDropDown;
