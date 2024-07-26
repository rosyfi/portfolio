"use client";

import { Overpass_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import LaptopMenuBar from "./components/LaptopMenuBar";
import ChatContent from "./components/ChatContent";
import styles from "./page.module.css";
import Window from "./components/Window";
import MenuBar from "./components/MenuBar";
import { usePathname } from "next/navigation";

const overpass_mono = Overpass_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={overpass_mono.className}>
        <main className={styles.main}>
          <LaptopMenuBar />
          <div className={styles.windowsContainer}>
            <Window path={"rossellafilocomo/chat"}>
              <ChatContent />
            </Window>
            <Window path={"rossellafilocomo" + usePathname()}>
              <div className={styles.windowWrapper}>
                <MenuBar />
                {children}
              </div>
            </Window>
          </div>
        </main>
      </body>
    </html>
  );
}
