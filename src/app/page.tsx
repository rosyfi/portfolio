"use client";

import { useState } from "react";

import styles from "./page.module.css";

import DesktopBar from "./components/DesktopBar";
import Window from "./components/Window";
import MainContent from "./components/MainContent";
import DesktopShortcut from "./components/DesktopShortcut";

export default function Home() {
  const [path, setPath] = useState<string>("rossellafilocomo/contact");
  const [currentContent, setCurrentContent] = useState<number>(1);

  return (
    <main className={styles.main}>
      <DesktopBar />
      <div className={styles.windowsContainer}>
        <Window path={path}>
          <MainContent
            onPathChange={setPath}
            currentContent={currentContent}
            setCurrentContent={setCurrentContent}
          />
        </Window>
        <div className={styles.shortcutContainer}>
          <div className={styles.websitesShortcutContainer}>
            <DesktopShortcut
              name={"LinkedIn"}
              link={"https://www.linkedin.com/in/rossellafilocomo/"}
              logo="linkedIn"
              href
            />
            <DesktopShortcut
              name={"GitHub"}
              link={"https://github.com/rosyfi"}
              logo="github"
              href
            />
            <DesktopShortcut
              name={"CV"}
              link={"filename"}
              logo="cv"
              setCurrentContent={() => {
                setCurrentContent(7);
              }}
            />
            <DesktopShortcut
              name={"My Page"}
              link={"frontpage"}
              logo="web"
              setCurrentContent={() => {
                setCurrentContent(2);
              }}
            />
          </div>
          <div className="chatShortcutContainer">
            <DesktopShortcut
              name={"Chat"}
              link={"Chat"}
              logo="chat"
              setCurrentContent={() => {
                setCurrentContent(1);
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
