'use strict';
import { Provider } from 'react-redux';
import appStore from './redux/store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadPuppiesAsync, loadPuppyAsync } from './redux/action-creators';
import AllPuppiesContainer from './containers/AllPuppiesContainer';
import SinglePuppyContainer from './containers/SinglePuppyContainer';

function onPuppiesEnter() {
    const thunk = loadPuppiesAsync();
    store.dispatch(thunk);
}

function onPuppyEnter(routerState) {
    const thunk = loadPuppyAsync(routerState.params.puppyId);
    store.dispatch(thunk);
}

ReactDOM.render(
  <Provider store={appStore} >
    <div className="container flexbox-container">
      <div className="jumbotron">
      <h3>PetBook</h3>
      <hr/>
      <h3>a social</h3>
      <h3>network</h3>
      <h3>for pets</h3>
      <hr/>
      <img src="Logo.png" height="100" width="100"/>
      </div>
      <div className="jumbotron">
        <Router history={hashHistory}>
          <Route path="/">
            <Route path="puppies" component={AllPuppiesContainer} onEnter={onPuppiesEnter} />
             <Route path="puppies/:puppyId" component={SinglePuppyContainer} onEnter={onPuppyEnter} />
            <IndexRoute component={AllPuppiesContainer} onEnter={onPuppiesEnter} />
          </Route>
        </Router>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
