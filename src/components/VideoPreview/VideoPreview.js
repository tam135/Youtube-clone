import React from "react";
import {Image} from 'semantic-ui-react';
import "./VideoPreview.scss";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-us')


export default class VideoPreview extends React.Component {
  render() {
    console.log(this.props)
    const {video} = this.props;
    if(!video) {
      return <div/>
    }

    const horizontal = this.props.horizontal ? 'horizontal' : null;
    const viewAndTimeString = VideoPreview.getFormattedViewAndTime(video)
    return (
      <div className={["video-preview", horizontal].join(" ")}>
        <div className="image-container">
          <Image src={video.snippet.thumbnails.medium.url} />
          <div className="time-label">
            <span>{video.contentDetails.duration}</span>
          </div>
        </div>

        <div className="video-info">
          <div className="semi-bold show-max-two-lines">
            {video.snippet.title}
          </div>
          <div className="video-preview-metadata-container">
            <div className="channel-title">{video.snippet.channelTitle}</div>
            <div>
              <span>{viewAndTimeString}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  static getFormattedViewAndTime(video) {
    const publicationDate = new Date(video.snippet.publishedAt);
    return `${video.statistics.viewCount} views • ${timeAgo.format(publicationDate)}`;
  }
}
