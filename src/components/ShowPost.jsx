import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import axios from 'axios';

import Home from './Home';


class ShowPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts:[]
    }
  }

  componentDidMount = () => {
    var self = this;
    axios.post('http://localhost:9000/getpost',{
    }).then((response) => {
      self.setState({posts:response.data});
    }).catch((err) => {
      console.log(err);
    });
  }

  
  render() {
    return(
      <Home>
        <ListGroup>
          {
            this.state.posts.map((post, index) => {
              return <ListGroupItem href="#" key={index} header={post.title} active>
                {post.subject}
              </ListGroupItem>
            })
          }
        </ListGroup>
      </Home>
    );
  }
}
export default ShowPost;
