import React from 'react';
import {connect} from 'react-redux';
import SinglePuppy from '../components/SinglePuppy';


function mapStateToProps(state, ownProps) {
  return {
          selectedPuppy: state.selectedPuppy
    }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    // loadPuppies: puppyThunk
    }
}

const SinglePuppyContainer = connect(mapStateToProps,mapDispatchToProps)(SinglePuppy);

export default SinglePuppyContainer;