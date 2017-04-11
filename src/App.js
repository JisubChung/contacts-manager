import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import contact from './reducers/contact';
import Contacts from './containers/App';

const store = createStore(contact);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Contacts />
        </Provider>
    );
  }
}

export default App;
