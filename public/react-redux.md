redux

1. Create the store

      import {createStore, combineReducers} from 'redux';

      const initialState = {
        allPuppies: []
      }
      const appStore = createStore(rootReducer, initialState);

      export default appStore;

2. Wrap app in Provider and pass the element tree the store.
all elements can access via this.element.store

      'use strict';
      import { Provider } from 'react-redux';
      import appStore from '../redux/store';

      import React from 'react';
      import ReactDOM from 'react-dom';
      import AllPuppies from './AllPuppies';

      ReactDOM.render(
        <Provider store={appStore} >
          <div className="container flexbox-container">
            <div className="jumbotron">
              <AllPuppies />
            </div>
          </div>
        </Provider>,
        document.getElementById('app')
      );

3. Create a connect container

      import React from 'react';
      import {connect} from 'react-redux';

      import AllPuppies from '../components/AllPuppies';


      function mapStateToProps(state, ownProps) {
        return state.allPuppies;
      }

      function mapDispatchToProps(dispatch, ownProps) {
      }

      const statefulComponentCreatorFunc = connect(mapStateToProps);

      const AllPuppiesContainer = statefulComponentCreatorFunc(AllPuppies);

      export default AllPuppiesContainer;