import styles from "./Btn.module.css";

function Btn(params) {
  return (
    <button className={styles.btn} value={params.value}>
      {params.name}
    </button>
  );
}

export default Btn;
