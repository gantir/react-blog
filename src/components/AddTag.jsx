import React, { Component } from 'react';
import axios from 'axios';
import { Col, Form, Button } from 'react-bootstrap';

import FieldGroup from './FieldGroup';

import Home from './Home';

class AddTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: ''
    };
  }

  handleTagChange = e => {
    this.setState({ tag: e.target.value });
  };

  addTag = () => {
    axios
      .post('http://localhost:9000/addtag', {
        tag: this.state.tag
      })
      .then(response => {
        console.log(response);
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
                label="Tag"
                type="text"
                required
                placeholder="Tag"
                value={this.state.tag}
                onChange={this.handleTagChange}
              />
              <Button
                type="button"
                id="submit"
                name="submit"
                bsStyle="primary"
                className="pull-right"
                onClick={this.addTag}
              >
                Add Tag
              </Button>
            </Form>
          </div>
        </Col>
      </Home>
    );
  }
}

export default AddTag;
