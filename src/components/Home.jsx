import React, {Component} from 'react';
import {Nav, NavItem, Jumbotron} from 'react-bootstrap';
import ShowPost from './ShowPost';
import AddPost from './AddPost';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="header clearfix">
          <nav>
            <Nav bsStyle="pills" pullRight>
              <NavItem href="#" className="active" aria-label="presentation" >Home</NavItem>
              <NavItem href="#" aria-label="presentation">Add</NavItem>
              <NavItem href="#" aria-label="presentation">Logout</NavItem>
            </Nav>
          </nav>
          <h3 className="text-muted">React Blog App</h3>
        </div>
        <Jumbotron>
          <ShowPost/>
          <AddPost/>
        </Jumbotron>

      <footer className="footer">
        <p>&copy; 2017 Company, Inc.</p>
      </footer>
    </div>
    );
  }
}

export default Home;
