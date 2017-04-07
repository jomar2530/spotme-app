import React from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
export default class Navigation extends React.Component{
  render(){
    function NavigationInstance(props){
      return(
        <Navbar default collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><img className="navbar-logo" src={props.navbarImage}/></a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#"><img className="navbar-message" src={props.messageImage}/>Messages</NavItem>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
      );
    }

    const navbarProps = {
      navbarImage: require('../assets/img/SpotMe_logo.png'),
      messageImage: require('../assets/img/messages_icon.png')
    };

    return(
      <div>
        <NavigationInstance
          navbarImage = {navbarProps.navbarImage}
          messageImage = {navbarProps.messageImage}
        />
      </div>
    );
  }
}
