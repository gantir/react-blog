import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class ShowPost extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
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
    );
  }
}
export default ShowPost;
