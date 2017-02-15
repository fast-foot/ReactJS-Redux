import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import About from './About';
import Track from './Track';
import './index.css';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/tracks/:id" component={Track} />
      <Route path="/about" component={About} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// import { createStore } from 'redux';
//
// function playlist(state = [], action) {
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state,
//       action.payload
//     ];
//   }
//   return state;
// }
//
// const store = createStore(playlist);
//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const list = document.querySelectorAll('.list')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
//
// console.log(store.getState());
//
// store.subscribe(() => {
//   //console.log('subscribe', store.getState());
//   list.innerHTML = '';
//   trackInput.value = ''
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   })
// })
//
// store.dispatch({ type: 'ADD_TRACK', payload: 'SLS' });
//
// addTrackBtn.addEventListener('click', () => {
//   const trackName = document.querySelectorAll('.trackInput')[0].value;
//   //console.log('trackName', trackName);
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName });
// })
