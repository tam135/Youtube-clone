import React, { Component } from 'react'
import VideoGrid  from "../../components/VideoGrid/VideoGrid";
import SideBar from '../Sidebar/SideBar';
import './Home.scss';

export default class Home extends Component {
    render() {
        return (
          <>
            <SideBar/>
            <div className="home">
              <div className="responsive-video-grid-container">
                <VideoGrid title="Trending" />
                <VideoGrid title="Autos & Vehicles" hideDivider={true} />
              </div>
            </div>
          </>
        );
    }
}
