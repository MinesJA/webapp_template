// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// REDUX
import toolsApp from './reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// COMPONENTS
import App from './App';
// STYLING
import './index.css';
import 'semantic-ui-css/semantic.min.css';


const store = createStore(
   toolsApp, composeWithDevTools(applyMiddleware(thunk))
  );

ReactDOM.render(

    <Router>
      <Provider store={store} >
        <App />
      </Provider>
    </Router>,

  document.getElementById('root'));

registerServiceWorker();
