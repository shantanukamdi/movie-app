import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import Main from './containers/Main';
import GlobalStyle from './styles/global';

import './App.css';

store.subscribe(() => {
  console.log(store.getState());
});

class App extends Component {
  
  render() {
    return (
     <Provider store={store}>
        <Main />
        <GlobalStyle />
     </Provider>
    );
  }
}

export default App;
