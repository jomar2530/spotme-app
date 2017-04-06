import React from 'react';

export default class Navigation extends React.Component{
  render(){

    function SpotMe(props){
      return(
        <nav>
          <div id="spotme-logo-content">
            <a href="#">
              <img id="spotme-logo" src={props.spotmeLogo}/>
            </a>
            <ul>
              <li><a href=""><p id="par-logout">Log out</p></a></li>
              <li>
                <a href="" id="message-logo-link">
                    <img id="message-logo" src = {props.messageLogo}/>
                    <p id="par-messages">Messages</p>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
    const spotmeNavigationProps = {
      spotmeLogo: require('../assets/img/SpotMe_logo.png'),
      messageLogo: require('../assets/img/messages_icon.png'),
    };
    return(
      <div id="header-nav">
        <SpotMe
          spotmeLogo = {spotmeNavigationProps.spotmeLogo}
          messageLogo = {spotmeNavigationProps.messageLogo}
          />
      </div>
    );
  }
}
