import React from 'react';
import {Navbar} from 'react-bootstrap';

export default class Footer extends React.Component{
  render(){
    function handleClick(e) {
      e.preventDefault();
      location.href='https://www.messenger.com/t/100000198021490';
    }

    return(
      <footer>
          <nav className="navbar navbar-default navbar-fixed-bottom" role="navigation">
            <div className="navbar-header">
              <p>Venmo SpotMe $6 to have him as your trainer today!</p>
            </div>
            <div>
              <p className="navbar-right">
                <button className="btn-chat" onClick={handleClick} >Chat</button>
              </p>
            </div>
        </nav>
      </footer>
    );
  }
}
