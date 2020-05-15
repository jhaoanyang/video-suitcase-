import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import ytDFormat from 'youtube-duration-format';

function Video(props) {
    const videoId = props.match.params.videoId;
    const videoItems = useSelector(state => state.video.items);
    
    const playItem  = videoItems.find(item => item.id === videoId);

    return (
            <div className="container">
                <div className="col-sm-12">
                    <YouTube
                        videoId={videoId}
                    />
                    {playItem &&
                        <div>
                            <div>{ytDFormat(playItem.length)}</div>
                            <h4>{playItem.title}</h4>
                            <div>{playItem.description}</div>
                        </div>
                    }
                </div>    
            </div>
    );
}

export default Video;