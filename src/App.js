import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';
import Main from './containers/Main';
import GlobalStyle from './styles/global';

import './App.css';

import '../node_modules/react-modal-video/scss/modal-video.scss';

store.subscribe(() => {
  console.log(store.getState());
});

class App extends Component {
  
  render() {
    return (
     <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        <GlobalStyle />
     </Provider>
    );
  }
}

export default App;
