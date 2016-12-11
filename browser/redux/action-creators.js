import store from './store';
import axios from 'axios';

// not used
const puppyData = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];
const hardcodedPuppy = {
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};

// action types
export const GET_PUPPIES = 'GET_PUPPIES';
export const SELECT_PUPPY = 'SELECT_PUPPY';

// action creators
export function getPuppies (puppies) {
  return {
    type: 'GET_PUPPIES',
    puppies: puppies
  };
};

export function selectPuppy (puppy) {
  return {
    type: 'SELECT_PUPPY',
    puppy: puppy
  };
};

////////////////////////////////////
// dispatchers
////////////////////////////////////

// not used
// export function loadPuppiesSync() {
//   const action = getPuppies(puppyData);
//   store.dispatch(action);
// };

// export function setSelectedPuppy(puppy) {
//   const action = selectPuppy(puppy);
//   store.dispatch(action);
// };

// not used
// thunk allows a function to be passed to dispatch

export function loadPuppyAsync(puppyId) {
  return function(dispatch) {
    console.log("Puppy id is: ",puppyId);
    axios.get('/api/puppies/' + puppyId)
    .then (response => {
      console.log("Got puppy back from server: ",response.data);
      const action = selectPuppy(response.data);
      console.log('action is: ',action);
      dispatch(action);
    })
    .catch(err => console.error(err));
  }
}

export function loadPuppiesAsync() {
  return function(dispatch) {
    axios.get('/api/puppies')
    .then (response => {
      console.log("Got puppies back from server: ",response.data);
      const action = getPuppies(response.data);
      dispatch(action);
    })
    .catch(err => console.error(err));
  }
}