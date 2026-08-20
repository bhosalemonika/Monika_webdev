import styles from "./App.module.css";

function App() {
  return (
    <>
      <h1 className={styles.name}>
        CSS Module in React
      </h1>

      <div className={styles.card}>
        <img
          className={styles.image}
          src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
          alt="profile"
        />

        <h4 className={styles.name}>
          Monika Bhosale
        </h4>

        <h4 className={styles.role}>
          Software Developer
        </h4>
      </div>
    </>
  );
}

export default App;