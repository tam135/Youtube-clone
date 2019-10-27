import React, { Component } from 'react'
import './Watch.scss'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';
import Comments from '../Comments/Comments';

export default class Watch extends Component {
    render() {
        return (
            <div className='watch-grid'>
                <Video className='video' id='-7fuHEEmEjs' />
                <VideoMetaData className='metadata' viewCount={1000}/> 
                <VideoInfoBox className='video-info-box'/>
                <Comments className='comments'/>
                <RelatedVideos className='relatedVideos'/>
            </div>
        )
    }
}
