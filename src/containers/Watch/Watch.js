import React, { Component } from 'react'
import './Watch.scss'
import VideoPreview from '../../components/VideoPreview/VideoPreview'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';

export default class Watch extends Component {
    render() {
        return (
            <RelatedVideos/>
           /*  <>
                <VideoPreview horizontal={true}/>
                <VideoPreview/>
            </> */
        )
    }
}
