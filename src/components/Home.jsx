import React, {Component} from 'react';
import {Nav, NavItem, Jumbotron} from 'react-bootstrap';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="header clearfix">
          <nav>
            <Nav bsStyle="pills" pullRight>
              <NavItem href="/home" className="active" aria-label="presentation" >Home</NavItem>
              <NavItem href="/addpost" aria-label="presentation">Add</NavItem>
              <NavItem href="#" aria-label="presentation">Logout</NavItem>
            </Nav>
          </nav>
          <h3 className="text-muted">React Blog App</h3>
        </div>
        <Jumbotron>
          {this.props.children}
        </Jumbotron>

      <footer className="footer">
        <p>&copy; 2017 Company, Inc.</p>
      </footer>
    </div>
    );
  }
}

export default Home;
