import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './store/store'
import Header from './components/header/header'
import Main from './components/main/main'

function App() {
  return ( 
    <Provider store={store}>
      <div className="App" >
        <Header />        
        <Main />
      </div>
    </Provider>
  );
}

export default App;