import React, { Component } from 'react';
import { loadPuppyAsync } from '../redux/action-creators';

export default class SinglePuppy extends Component {

  componentDidMount() {
    // console.log("SinglePuppy mount, pup is: ",this.props.params.puppyId);
    // loadPuppyAsync(this.props.params.puppyId);
  }

  render () {
    let puppy = this.props.selectedPuppy;
    console.log("props are: ", this.props);
    console.log("Selected puppy is: ",puppy);
    return (
      <div>
        <h2>{puppy.owner}'s {puppy.name}</h2>
        <div>
          <img src={puppy.image} height="400" width="450"/>
        </div>
      </div>
    )
  }
}