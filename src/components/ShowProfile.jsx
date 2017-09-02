import React, { Component } from 'react';
import { Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';

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

  updateProfile = () => {
    let self = this;
    axios
      .post('http://localhost:9000/updateprofile', {
        name: self.state.name,
        password: self.state.password
      })
      .then(response => {
        if (response) {
          self.props.history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  getProfile = () => {
    let self = this;
    axios
      .post('http://localhost:9000/getprofile', {})
      .then(response => {
        console.log(response);
        self.setState({ name: response.data.name });
        self.setState({ email: response.data.email });
        self.setState({ password: response.data.password });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

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
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <FieldGroup
                type="password"
                label="Password"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <Button
                type="button"
                bsStyle="primary"
                id="submit"
                name="submit"
                className="pull-right"
                onClick={this.updateProfile}
              >
                Update
              </Button>
            </Form>
          </div>
        </Col>
      </Home>
    );
  }
}
export default ShowProfile;
