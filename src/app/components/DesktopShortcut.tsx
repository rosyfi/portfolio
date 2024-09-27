import React from "react";
import styles from "../styles/DesktopShortcut.module.css";

interface DesktopShortcutProp {
  name: string;
  link: string;
  logo: string;
  href?: boolean;
  setCurrentContent?: () => void;
}
const DesktopShortcut: React.FC<DesktopShortcutProp> = ({
  name,
  link,
  logo,
  href = false,
  setCurrentContent = () => {},
}) => {
  return (
    <>
      {(href && (
        <a href={link} target="_blank">
          <div className={styles.container}>
            <img className={styles.logo} src={`${logo}.svg`} alt={logo} />
            <i className="bi bi-box-arrow-up-right">{name}</i>
          </div>
        </a>
      )) || (
        <button
          className={styles.button}
          onClick={() => {
            setCurrentContent();
          }}
        >
          <div className={styles.container}>
            <img className={styles.logo} src={`${logo}.svg`} alt={logo} />
            <span>{name}</span>
          </div>
        </button>
      )}
    </>
  );
};

export default DesktopShortcut;
