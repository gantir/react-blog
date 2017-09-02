import React, { Component } from 'react';
import { Nav, NavItem, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header clearfix">
          <nav>
            <Nav bsStyle="pills" pullRight>
              <LinkContainer to="/home" activeClassName="active">
                <NavItem aria-label="presentation">Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/addpost" activeClassName="active">
                <NavItem aria-label="presentation">Add</NavItem>
              </LinkContainer>
              <LinkContainer to="/profile" activeClassName="active">
                <NavItem aria-label="presentation">Profile</NavItem>
              </LinkContainer>
              <LinkContainer to="/addtag" activeClassName="active">
                <NavItem aria-label="presentation">Tag</NavItem>
              </LinkContainer>
              <LinkContainer to="#" activeClassName="active">
                <NavItem aria-label="presentation">Logout</NavItem>
              </LinkContainer>
            </Nav>
          </nav>
          <h3 className="text-muted">React Blog App</h3>
        </div>
        <Jumbotron>{this.props.children}</Jumbotron>

        <footer className="footer">
          <p>&copy; 2017 Company, Inc.</p>
        </footer>
      </div>
    );
  }
}

export default Home;
