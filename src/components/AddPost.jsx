import React, {Component, hashHistory} from 'react';
import {Col, Button} from 'react-bootstrap';

import Home from './Home';
import FieldGroup from './FieldGroup';

import axios from 'axios';


class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subject:''
    }
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleSubjectChange = (e) => {
    this.setState({subject: e.target.value});
  }

  addPost = () => {
    axios.post('http://localhost:9000/addpost',{
      title: this.state.title,
      subject: this.state.subject
    })
    .then((response) => {
      console.log('response from add post is ', response);
      hashHistory.push('/');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <Home>
        <Col md={5}>
            <div className="form-area">
            <form role="form">
              <br style={{clear:'both'}} />
              <FieldGroup
                id="title"
                type="text"
                name="title"
                placeholder="Title"
                required
                onChange={this.handleTitleChange}
              />
              <FieldGroup
                id="subject"
                componentClass="textarea"
                placeholder="Subject"
                maxLength={140}
                rows={7}
                onChange={this.handleSubjectChange}
              />
              <Button type="button" bsStyle="primary" id="submit" name="submit" onClick={this.addPost} >Add Post</Button>
            </form>

          </div>
        </Col>
      </Home>
    );
  }

}

export default AddPost;
