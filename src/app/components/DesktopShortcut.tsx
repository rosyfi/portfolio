import React from "react";
import styles from "../styles/DesktopShortcut.module.css";

interface DesktopShortcutProp {
  name: string;
  link: string;
  logo: string;
}
const DesktopShortcut: React.FC<DesktopShortcutProp> = ({
  name,
  link,
  logo,
}) => {
  return (
    <a href={link} target="_blank">
      <div className={styles.container}>
        <img className={styles.logo} src={`${logo}.svg`} alt={logo} />
        <i className="bi bi-box-arrow-up-right">{name}</i>
      </div>
    </a>
  );
};

export default DesktopShortcut;
