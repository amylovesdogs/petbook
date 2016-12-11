import React from 'react';
import { Link } from 'react-router';

export default class AllPuppies extends React.Component {

  render () {

    let puppies = this.props.allPuppies;
    console.log("In AllPuppies, pups are: ",puppies);
    return (
      <div>
        <h3>Users</h3>
        <hr/>
        <ul className="list-unstyled">
          {
            puppies.map(puppy =>
              (
                <li key={puppy.id}>
                  <Link to={"/puppies/" + puppy.id}>{puppy.name}</Link>
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}