import React, { Component } from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

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
      tag: '',
      tags: [],
      id: ''
    };
  }

  componentDidMount = () => {
    this.getPostWithId();
    this.getTags();
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubjectChange = e => {
    this.setState({ subject: e.target.value });
  };

  handleTagChange = e => {
    this.setState({ tag: e.target.value });
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
        self.setState({ tag: response.data.tag });
        self.setState({ id: response.data.id });
        self.setState({ action: 'Update Post' });
      })
      .catch(err => {
        console.log('error is', err);
      });
  };

  getTags = () => {
    let self = this;
    axios
      .post('http://localhost:9000/gettag', {})
      .then(response => {
        self.setState({ tags: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addPost = () => {
    axios
      .post('http://localhost:9000/addpost', {
        title: this.state.title,
        subject: this.state.subject,
        id: this.state.id,
        tag: this.state.tag
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
              <FormGroup>
                <ControlLabel>Select Tag:</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="select"
                  value={this.state.tag}
                  onChange={this.handleTagChange}
                >
                  <option value="0">Select Tag</option>
                  {this.state.tags.map((tag, index) => {
                    return (
                      <option key={index} value={tag.id}>
                        {tag.name}
                      </option>
                    );
                  })}
                </FormControl>
              </FormGroup>

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
