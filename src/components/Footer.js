import React from 'react';

export default class Footer extends React.Component{
  render(){
    return(
        <div className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-content">
              <p>Venmo SpotMe $6 to have him as your trainer today!</p>
            </div>
            <div className="footer-button">
              <div className="btn-section">
                <button className="chat-button-2">Chat</button>
              </div>
            </div>
          </div>
          <div className="no-content"></div>
        </div>
    );
  }
}
