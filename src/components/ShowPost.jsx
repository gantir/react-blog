import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Glyphicon, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import Home from './Home';

const DeleteConfirm = props => {
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.title}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.close}>Close</Button>
        <Button bsStyle="primary" onClick={props.onDeletePost}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      showDeleteModal: []
    };
  }

  componentDidMount = () => {
    this.getPosts();
  };

  getPosts = () => {
    let self = this;
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
    this.props.history.push('/addpost/' + id);
  };

  deletePost = id => {
    let self = this;
    self.closeConfirm(id);
    axios
      .post('http://localhost:9000/deletepost', {
        id: id
      })
      .then(response => {
        self.getPosts();
      })
      .catch(err => {
        console.log(err);
      });
  };

  showConfirm = id => {
    this.displayConfirm(id, true);
  };
  closeConfirm = id => {
    this.displayConfirm(id, false);
  };
  displayConfirm = (id, showModal) => {
    let showDeleteModal = [];
    showDeleteModal[id] = showModal;
    this.setState({ showDeleteModal });
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
              <th>Tag</th>
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
                  <td>{post.tag}</td>
                  <td>
                    <Link to={'/addpost/' + post.id}>
                      <Glyphicon glyph="pencil" />
                    </Link>
                  </td>
                  <td>
                    <Link
                      to="#"
                      replace={true}
                      onClick={this.showConfirm.bind(this, post.id)}
                    >
                      <Glyphicon glyph="remove" />
                      <DeleteConfirm
                        show={this.state.showDeleteModal[post.id] || false}
                        close={this.closeConfirm.bind(this, post.id)}
                        title={post.title}
                        onDeletePost={this.deletePost.bind(this, post.id)}
                        {...this.props}
                      />
                    </Link>
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
