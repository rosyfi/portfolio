import styles from "./page.module.css";

import LaptopMenuBar from "./components/LaptopMenuBar";
import Window from "./components/Window";

export default function Home() {
  return (
    <main className={styles.main}>
      <LaptopMenuBar />
      <Window />
    </main>
  );
}
