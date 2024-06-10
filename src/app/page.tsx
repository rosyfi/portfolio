import styles from "./page.module.css";

import LaptopMenuBar from "./components/LaptopMenuBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LaptopMenuBar />
    </main>
  );
}
