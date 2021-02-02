import react, { Component } from 'react';
import Home from './Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {Provider} from 'react-redux'
import store from './Store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
