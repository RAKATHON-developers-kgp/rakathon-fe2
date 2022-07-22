import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QueryLog from './components/QueryLog';
import Main from './components/Main';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<QueryLog />}></Route>
        <Route exact path='/create' element={<Main />}></Route>
        {/* <Route exact path='/' element={<Main />}></Route> */}
      </Routes>
    </Router >
  );
}

export default App;
