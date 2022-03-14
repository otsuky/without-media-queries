import React from "react";
import styles from "./App.module.css";

export const App: React.VFC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        <div className={styles.body}>BODY</div>
        <aside className={styles.aside}>ASIDE</aside>
      </main>
      <footer className={styles.footer}>FOOTER</footer>
    </div>
  );
};
