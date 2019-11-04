import React, { Component } from 'react'
import VideoGrid from '../../../components/VideoGrid/VideoGrid';
import './HomeContent.scss';
import {getMostPopularVideos, getVideosByCategory} from '../../../store/reducers/video';
import {connect} from 'react-redux';


const AMOUNT_TRENDING_VIDEOS = 12;

class HomeContent extends Component {

  getTrendingVideos() {
    return this.props.mostPopularvideos.slice(0, AMOUNT_TRENDING_VIDEOS);
  }

  getVideoGridsForCategories() {
    const categoryTitles = Object.keys(this.props.videosByCategory || {});
    return categoryTitles.map((categoryTitle, index) => {
      const videos = this.props.videosByCategory[categoryTitle];
      // the last video grid element should not have a divider
      const hideDivider = index === categoryTitles.length - 1;
      return (
        <VideoGrid
          title={categoryTitle}
          videos={videos}
          key={categoryTitle}
          hideDivider={hideDivider}
        />
      );
    });
  }

  render() {
    const categoryGrids = this.getVideoGridsForCategories();
    const trendingVideos = this.getTrendingVideos();
    return (
      <div className="home-content">
        <div className="responsive-video-grid-container">
          <VideoGrid title="Trending" videos={trendingVideos} />
          {categoryGrids}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mostPopularvideos: getMostPopularVideos(state),
    videosByCategory: getVideosByCategory(state)
  }
}

export default connect(mapStateToProps, null)(HomeContent);