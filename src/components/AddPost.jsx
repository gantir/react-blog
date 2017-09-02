import React, { Component } from 'react';
import { Col, Button, Form } from 'react-bootstrap';

import Home from './Home';
import FieldGroup from './FieldGroup';

import axios from 'axios';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: 'Add Post',
      title: '',
      subject: '',
      id: ''
    };
    this.getPostWithId();
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubjectChange = e => {
    this.setState({ subject: e.target.value });
  };

  getPostWithId = () => {
    let id = this.props.match.params.id;
    let self = this;
    axios
      .post('http://localhost:9000/getpostwithid', {
        id: id
      })
      .then(response => {
        self.setState({ title: response.data.title });
        self.setState({ subject: response.data.subject });
        self.setState({ id: response.data.id });
        self.setState({ action: 'Update Post' });
      })
      .catch(err => {
        console.log('error is', err);
      });
  };

  addPost = () => {
    axios
      .post('http://localhost:9000/addpost', {
        title: this.state.title,
        subject: this.state.subject,
        id: this.state.id
      })
      .then(response => {
        console.log('response from add post is ', response);
        this.props.history.push('/home');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Home>
        <Col md={5}>
          <div className="form-area">
            <Form>
              <FieldGroup
                id="title"
                type="text"
                name="title"
                placeholder="Title"
                value={this.state.title}
                required
                onChange={this.handleTitleChange}
              />
              <FieldGroup
                id="subject"
                componentClass="textarea"
                placeholder="Subject"
                maxLength={140}
                rows={7}
                value={this.state.subject}
                onChange={this.handleSubjectChange}
              />
              <Button
                type="button"
                bsStyle="primary"
                id="submit"
                name="submit"
                onClick={this.addPost}
              >
                {this.state.action}
              </Button>
            </Form>
          </div>
        </Col>
      </Home>
    );
  }
}

export default AddPost;
