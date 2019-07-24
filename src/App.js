import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import EmailList from './components/EmilList';
import NewEmail from './components/NewEmail';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/list" component={EmailList} />
        <Route path='/new-email' component={NewEmail} />
      </div>
    </Router>
  );
}

export default App;
