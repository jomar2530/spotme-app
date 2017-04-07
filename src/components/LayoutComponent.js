import React from 'react';

export default class LayoutComponent extends React.Component{
  render(){

    function Profile(props){
      return(
        <div className="profile-container">
          <div className="row">
            <div className="col-md-6" id="profile-content-1">
              <img className="img-profile" src={props.userPicture}/>
            </div>
            <div className="col-md-6" id="profile-content-2">
              <p>chicharapcrunch16 <button className="btn-chat">Chat</button></p>
              <p id="parag-content">8 years of experience.<br/> Specializes in bodybuilding and weightloss.<br/> Top trainer in Asia 2012 - 2017 (Fitness First)</p>
            </div>
          </div>
        </div>
      );
    }

    function Gallery(props){
      return(
        <div className="gallery-wrapper">
            <div className="gallery-container">
                <p>Clients:</p>
                <section className="img-gallery">
                  <img className="photo-gallery" src={props.imageOne}/>
                </section>
                <section className="img-gallery">
                  <img className="photo-gallery" src={props.imageTwo}/>
                </section>
                <section className="img-gallery">
                  <img className="photo-gallery" src={props.imageThree}/>
                </section>
            </div>
            <div className="no-content"></div>
          </div>
      );
    }


    const galleryprops = {
     imageOne: require('../assets/img/client2.jpg'),
     imageTwo: require('../assets/img/client2.jpg'),
     imageThree: require('../assets/img/client2.jpg')
    };

    const profileProps = {
      userPicture: require('../assets/img/client2.jpg'),
    };

    return(
      <div className="layout-wrapper">
        <div className="container">
          <Profile
            userPicture = {profileProps.userPicture}
          />
            <Gallery
              imageOne = {galleryprops.imageOne}
              imageTwo = {galleryprops.imageTwo}
              imageThree = {galleryprops.imageThree}
            />
        </div>
      </div>
    );
  }
}
