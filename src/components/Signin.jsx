import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import FieldGroup from './FieldGroup';

import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  signIn = () => {
    axios
      .post('http://localhost:9000/signin', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        if ('success' === response.data) {
          window.location.assign('/home');
        }
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    //alert('hi'+this.state.email+this.state.password);
  };

  render() {
    return (
      <div>
        <Form>
          <h2>Please Sign in</h2>
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Email address"
            required
            autoFocus
            onChange={this.handleEmailChange}
          />
          <FieldGroup
            id="formControlsPassword"
            type="password"
            label="Password"
            placeholder="Password"
            required
            onChange={this.handlePasswordChange}
          />
          <Button
            type="button"
            bsStyle="primary"
            bsSize="large"
            block
            onClick={this.signIn}
          >
            Sign in
          </Button>
        </Form>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    );
  }
}

export default Signin;
