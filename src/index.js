// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// REDUX
import toolsApp from './reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// COMPONENTS
import App from './App';
// STYLING
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Oswald:400,500', 'sans-serif']
  }
});


const store = createStore(toolsApp, composeWithDevTools(applyMiddleware(thunk)));
console.log("CURRENT STATE: ", store.getState())


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
