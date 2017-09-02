import React, { Component } from 'react';
import { Col, Button, Form } from 'react-bootstrap';

import FieldGroup from './FieldGroup';
import Home from './Home';

class ShowProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      id: ''
    };
  }

  componentDidMount = () => {
    this.getProfile();
  };

  updateProfile = () => {};

  getProfile = () => {};

  render() {
    return (
      <Home>
        <Col md={5}>
          <div className="form-area">
            <Form>
              <br style={{ clear: 'both' }} />
              <FieldGroup
                type="text"
                label="Name"
                placeholder="Name"
                required
                onChange={this.handleNameChange}
              />
              <FieldGroup
                type="password"
                label="password"
                placeholder="Password"
                required
                onChange={this.handlePasswordChange}
              />
              <Button
                type="button"
                bsStyle="primary"
                id="submit"
                name="submit"
                onClick={this.addPost}
              >
                Add Post
              </Button>
            </Form>
          </div>
        </Col>
      </Home>
    );
  }
}
export default ShowProfile;
