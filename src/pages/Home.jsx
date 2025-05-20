import styles from '../css/HomePage.module.css';
import TopBar from '../components/home_components/TopBar';

function Home() {
  return (
    <nav className={styles["nav-container"]}>
      <TopBar />
    </nav>
  );
}
export default Home;