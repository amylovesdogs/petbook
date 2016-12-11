import React from 'react';
import {connect} from 'react-redux';
import AllPuppies from '../components/AllPuppies';

function mapStateToProps(state, ownProps) {
  return {
          allPuppies: state.allPuppies
    }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    // loadPuppies: puppyThunk
    }
}

const AllPuppiesContainer = connect(mapStateToProps,mapDispatchToProps)(AllPuppies);

export default AllPuppiesContainer;