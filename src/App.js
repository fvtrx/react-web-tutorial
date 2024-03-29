import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import About from './pages/About';
// import 'tailwindcss/tailwind.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
