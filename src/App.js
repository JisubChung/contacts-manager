import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import contact from './reducers/contact';
import contactsData from './data.json';
import Contacts from './containers/App';

console.log(contactsData.contacts);

const store = createStore(contact);
console.log(store);

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
