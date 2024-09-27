"use client";

import { useState } from "react";

import styles from "./page.module.css";

import DesktopBar from "./components/DesktopBar";
import Window from "./components/Window";
import MainContent from "./components/MainContent";
import ChatContent from "./components/ChatContent";
import DesktopShortcut from "./components/DesktopShortcut";

export default function Home() {
  const [path, setPath] = useState<string>("rossellafilocomo/about");
  const [chatPath] = useState<string>("rossellafilocomo/contact");
  const [resumePath] = useState<string>("rossellafilocomo/resume");
  const [currentContent, setCurrentContent] = useState<number>(1);

  return (
    <main className={styles.main}>
      <DesktopBar />
      <div className={styles.windowsContainer}>
        {/* <Window path={chatPath}>
          <ChatContent />
        </Window> */}
        <Window path={path}>
          <MainContent
            onPathChange={setPath}
            currentContent={currentContent}
            setCurrentContent={setCurrentContent}
          />
        </Window>
        <div className={styles.shortcutContainer}>
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
              setPath(resumePath);
            }}
          />
          <DesktopShortcut
            name={"My Page"}
            link={"startseite"}
            logo="web"
            setCurrentContent={() => {
              setCurrentContent(2);
            }}
          />
          <DesktopShortcut
            name={"Chat"}
            link={"Chat"}
            logo="test"
            setCurrentContent={() => {
              setCurrentContent(1);
              setPath(chatPath);
            }}
          />
        </div>
      </div>
    </main>
  );
}
