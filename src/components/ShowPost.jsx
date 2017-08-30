import React, { Component } from 'react';
import { Table, Glyphicon } from 'react-bootstrap';
import axios from 'axios';

import Home from './Home';

class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount = () => {
    var self = this;
    axios
      .post('http://localhost:9000/getpost', {})
      .then(response => {
        self.setState({ posts: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updatePost = id => {
    console.log('update', id);
  };

  deletePost = id => {
    console.log('delete', id);
  };

  render() {
    return (
      <Home>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Subject</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post, index) => {
              return (
                <tr key={index}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.subject}</td>
                  <td>
                    <Glyphicon
                      glyph="pencil"
                      onClick={this.updatePost.bind(this, post.id)}
                    />
                  </td>
                  <td>
                    <Glyphicon
                      glyph="remove"
                      onClick={this.deletePost.bind(this, post.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Home>
    );
  }
}
export default ShowPost;
