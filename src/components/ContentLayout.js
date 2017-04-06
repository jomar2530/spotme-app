import React from 'react';
import Footer from './Footer';

export default class ContentLayout extends React.Component{
  render(){
    function Profile(props){
      return(
        <div className="profile-wrapper">
          <div className="profile-container">
            <div id="profile-content-1">
              <img id="img-profile" src={props.profileImage}/>
            </div>
            <div id="profile-content-2">
              <p id="parag-title">coachredpat16<button className="chat-button">Chat</button></p>
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
            <div>
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
          </div>
        </div>
      );
    }

    var profileprops = {
      profileImage: require('../assets/img/client2.jpg')
    };

    const galleryprops = {
      imageOne: require('../assets/img/client2.jpg'),
      imageTwo: require('../assets/img/client2.jpg'),
      imageThree: require('../assets/img/client2.jpg')
    };

    return(
      <div className="container">

        <div className="profile_container">
          <Profile
            profileImage={profileprops.profileImage}
          />
        </div>

        <div className="gallery_container">
          <Gallery
            imageOne = {galleryprops.imageOne}
            imageTwo = {galleryprops.imageTwo}
            imageThree = {galleryprops.imageThree}
          />
        </div>

        <div className="separator"></div>

        <div className="footer_container">
          <Footer />
        </div>

        <div>

        </div>
      </div>
    );
  }
}
