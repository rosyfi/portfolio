"use client";

import { useState } from "react";

import styles from "./page.module.css";

import LaptopMenuBar from "./components/LaptopMenuBar";
import Window from "./components/Window";
import MainWindow from "./components/MainWindow";
import ChatContent from "./components/ChatContent";

export default function Home() {
  const [path, setPath] = useState("rossellafilocomo/about");

  return (
    <main className={styles.main}>
      <LaptopMenuBar />
      {/* <Window path={path}>
        <MainWindow onPathChange={setPath} />
      </Window> */}
      <Window path={path}>
        <ChatContent />
      </Window>
    </main>
  );
}
