import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import FieldGroup from './FieldGroup';

import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);

  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  signUp = () => {
    axios.post('http://localhost:9000/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <form>
        <h2>Please Sign up</h2>
        <FieldGroup
          id="formControlsNamel"
          type="name"
          label="Name"
          placeholder="Name"
          required
          autoFocus
          onChange={this.handleNameChange}
        />
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
        <Button type="submit" bsStyle="primary" bsSize="large" block onClick={this.signUp}>Sign Up</Button>
      </form>
    )
  }
}

export default Signup;
