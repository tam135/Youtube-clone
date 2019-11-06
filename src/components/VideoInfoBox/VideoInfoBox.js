import React, { Component } from 'react'
import './VideoInfoBox.scss';
import {Image, Button} from 'semantic-ui-react';
import Linkify from 'react-linkify';
import { getPublishedAtDateString } from "../../services/date/date-format";

export default class VideoInfoBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true
        }
    }
    
    getDescriptionParagraphs = () => {
        const videoDescription = this.props.video.snippet ? this.props.video.snippet.description : null;
        if(!videoDescription) {
            return null
        }
         return videoDescription.split("\n").map((paragraph, index) => (
           <p key={index}>
             <Linkify>{paragraph}</Linkify>
           </p>
         ));
    }

    getConfig = () => {
        let descriptionTextClass = 'collapsed';
        let buttonTitle = 'Show More';
        if (!this.state.collapsed) {
        descriptionTextClass = 'expanded';
        buttonTitle = 'Show Less';
        }
        return {
        descriptionTextClass,
        buttonTitle
        };
    }

    onToggleCollapse = () => {
        this.setState((poop) => {
            return {
                collapsed: !poop.collapsed
            }
        })
    }

    render() {
        if (!this.props.video) {
            return <div/>
        }
        
        const descriptionParagraphs = this.getDescriptionParagraphs();
        const { descriptionTextClass, buttonTitle } = this.getConfig()
        const publishedAtString = getPublishedAtDateString(
          this.props.video.snippet.publishedAt
        );

        return (
            <div className='video-info-box'>
                <Image className='channel-image' src='http://via.placeholder.com/48x48' circular/>
                <div className="video-info">
                    <div className='channel-name'>Channel Name</div>
                    <div className='video-publication-date'>{publishedAtString}</div>
                </div>
                <Button color='youtube'>91.5K Subscribe</Button>
                <div className="video-description">
                    <div className={descriptionTextClass}>
                         {descriptionParagraphs}
                    </div>
                    <Button compact onClick={this.onToggleCollapse}>{buttonTitle}</Button>
                </div>
                
            </div>
        )
    }
}
