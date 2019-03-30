import React, { Component } from 'react';
import './App.css';
import store from './store/store';
import { init } from './actions/index';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(init());

class App extends Component {
  
  render() {
    return (
     <div></div>
    );
  }
}

export default App;
