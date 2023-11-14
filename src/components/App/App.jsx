import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import About from '../About/About';
// import Home from '../Home/Home';
// import AllStudents from '../AllStudents/AllStudents';

function App() {
    return (
        <div className="App">
        <header className="App-header">
        <Router>
            
            <h1 className="App-title">GitHub Student List</h1>
            
            <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="allstudents">All Students</Link></li>
            </ul>
            </nav>
            <br />
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/allstudents">
                <AllStudents />
            </Route>
            
          
            
        </Router>  
        </header>
        </div>
    );
}

export default App;
