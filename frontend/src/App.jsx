import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
import Home from './Home.jsx';
import Premieres from './Premieres.jsx';
const App = () => {
    return (
        <Router>
           <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/signup" element={<SignUp/>} />
                <Route exact path="/premieres" element={<Premieres/>} />
            </Routes>
        </Router>
    );
}
export default App;