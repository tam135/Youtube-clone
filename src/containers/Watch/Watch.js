import React, { Component } from 'react'
import './Watch.scss'
import VideoPreview from '../../components/VideoPreview/VideoPreview'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'

export default class Watch extends Component {
    render() {
        return (
            <div className='watch-grid'>
                <Video className='video' id='-7fuHEEmEjs' />
                <VideoMetaData className='metadata' viewCount={1000}/> 
                <div className='video-info-box' style={{width: '100%', height: '100px', background: '#BD10E0'}}>Video Info box</div>
                <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
                <RelatedVideos className='relatedVideos'/>
            </div>
        )
    }
}
