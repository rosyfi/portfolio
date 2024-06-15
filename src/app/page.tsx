"use client";

import { useState } from "react";

import styles from "./page.module.css";

import LaptopMenuBar from "./components/LaptopMenuBar";
import Window from "./components/Window";
import MainWindow from "./components/MainWindow";
import ChatContent from "./components/ChatContent";

export default function Home() {
  const [path, setPath] = useState<string>("rossellafilocomo/about");
  const [chatPath] = useState<string>("rossellafilocomo/contact");

  return (
    <main className={styles.main}>
      <LaptopMenuBar />
      <div className={styles.windowsContainer}>
        <Window path={chatPath}>
          <ChatContent />
        </Window>
        <Window path={path}>
          <MainWindow onPathChange={setPath} />
        </Window>
      </div>
    </main>
  );
}
