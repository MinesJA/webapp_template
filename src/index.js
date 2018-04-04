// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// REDUX
import toolsApp from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { addTool,
         setVisibilitySort,
         setVisibilityFilter
} from './actions'
// COMPONENTS
import App from './App';
// STYLING
import './index.css';
import 'semantic-ui-css/semantic.min.css';





const store = createStore(
   toolsApp, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

console.log("CURRENT STATE: ", store.getState())


ReactDOM.render(
  <Provider store={store}>
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
