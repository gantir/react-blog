import React, {Component} from 'react';
import {Col, Button} from 'react-bootstrap';

import FieldGroup from './FieldGroup';

class AddPost extends Component {
  render() {
    return (
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
            />
            <FieldGroup
              id="subject"
              componentClass="textarea"
              placeholder="Subject"
            />
            <Button type="button" bsStyle="primary" id="submit" name="submit" >Add Post</Button>
          </form>

        </div>
      </Col>
    );
  }

}

export default AddPost;
