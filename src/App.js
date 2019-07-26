import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import ItemList from './components/ItemList';
import NewItem from './components/NewItem';
import reducer, { initialState } from './Functions';


function App() {

  let [state, dispatch] = useReducer(reducer, initialState());

  return (
    <Router basename="/email-storage/">
      <div className="App">
        <Route exact path="/" component={({history}) => <Login history={history} dispatch={dispatch} propPassword={state.password !== null ? state.password : false}/>} />
        <Route path="/list" component={() => <ItemList items={state.list.length > 0 ? state.list : false} />} />
        <Route path='/new-item' component={({ history }) => <NewItem history={history} dispatch={dispatch}/>} />
      </div>
    </Router>
  );
}

export default App;
