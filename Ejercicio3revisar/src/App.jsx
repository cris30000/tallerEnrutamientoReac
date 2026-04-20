import Header from './components/Header/Header';
import AppRouter from './routes/AppRouter';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;