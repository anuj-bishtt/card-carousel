import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import ReactStars from 'react-stars'
import four_fam from './images/four-fam.jpg';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
          <Item>
            <div className="outer-div">
              <img alt="user-images" className="top-img" src={four_fam} />
              <img alt="user-images" className="centered-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmD2H451zQGIeh7TGO5agmPxOGo5DYp6X4wzh5lVg&s" />
              <p className="tradition">Traditional Wedding</p>
              <p className="music">Music Equipment</p>
              <ReactStars className="stars" />
              <div className="user-details">
                <img alt="user-images" className="user-img" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" />
                <img alt="user-images" className="user-img overlap" src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                <p>+79K Followers</p>
              </div>
              <button className="btn">Invite</button>
            </div>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
