import styles from "./index.module.css";

export const Media: React.VFC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img src="https://placehold.jp/150x150.png" />
      </div>
      <div className={styles.content}>
        テキストテキストテキストテキストテキストテキストテキスト
      </div>
    </div>
  );
};
