import React, { useState } from "react";
import styles from "../.././../styles/content/skill/SkillsDropdown.module.css";

interface SkillsDropDownProps {
  onMenuItemClick: (content: number) => void;
}

//TODO: Allgemeine componente daraus machen

const SkillsDropDown: React.FC<SkillsDropDownProps> = ({ onMenuItemClick }) => {
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
                  onMenuItemClick(4);
                }}
              >
                <span className="name">Hard</span>
              </button>
            </div>
            <div className={styles.dropdownItem}>
              <button
                className={styles.dropdownButton}
                onClick={() => {
                  onMenuItemClick(5);
                }}
              >
                <span className="name">Soft</span>
              </button>
            </div>
            <div className={styles.dropdownItem}>
              <button
                className={styles.dropdownButton}
                onClick={() => {
                  onMenuItemClick(6);
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
