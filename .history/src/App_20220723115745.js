import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
