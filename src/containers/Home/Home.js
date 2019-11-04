import React, { Component } from 'react'
import "./Home.scss";
import {connect} from 'react-redux';
import *  as videoActions from '../../store/actions/video'
import {bindActionCreators} from 'redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';

import HomeContent from './HomeContent/HomeContent'
import SideBar from '../Sidebar/SideBar';



class Home extends Component {

    componentDidMount() {
      if (this.props.getYoutubeLibraryLoaded) {
        this.props.fetchMostPopularVideos();
      }
    }

    componentDidUpdate(prevProps){
      if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
        this.props.fetchMostPopularVideos();
      }
    }


    render() {
        return (
          <>
            <SideBar/>
            <HomeContent/>
          </>
        );
    }
    
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  return bindActionCreators({fetchMostPopularVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
