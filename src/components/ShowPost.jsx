import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import Home from './Home';

class ShowPost extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    return(
      <Home>
        <ListGroup>
          <ListGroupItem header="List group item heading">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItem>
          <ListGroupItem header="List group item heading">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItem>
          <ListGroupItem header="List group item heading">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItem>
        </ListGroup>
      </Home>
    );
  }
}
export default ShowPost;
