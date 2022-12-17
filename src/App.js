import styles from './App.module.scss';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className={styles.App}>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
