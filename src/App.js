import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects"  />
          <Route path="/project/:id" />
          <Route path="/experience" />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
