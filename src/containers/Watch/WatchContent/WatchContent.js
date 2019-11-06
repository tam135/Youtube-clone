import React, { Component } from 'react'
import Video  from "../../../components/Video/Video";
import VideoMetaData  from "../../../components/VideoMetaData/VideoMetaData"
import VideoInfoBox  from "../../../components/VideoInfoBox/VideoInfoBox";
import Comments  from "../../Comments/Comments";
import RelatedVideos  from "../../../components/RelatedVideos/RelatedVideos";
import { getVideoById } from "../../../store/reducers/video";
import { connect} from 'react-redux';
import "./WatchContent.scss";

class WatchContent extends Component {
    render() {
      if(!this.props.videoId) {
        return <div/>
      }
        return (
          <div className="watch-grid">
            <Video className="video" id={this.props.videoId} />
            <VideoMetaData className="metadata" video={this.props.video} />
            <VideoInfoBox className="video-info-box" />
            <Comments className="comments" amountComments={12141} />
            <RelatedVideos className="relatedVideos" />
          </div>
        );
    }
}

function mapStateToProps(state, props) {
  return {
    video: getVideoById(state, props.videoId)
  };
}

export default connect(mapStateToProps, null)(WatchContent);
