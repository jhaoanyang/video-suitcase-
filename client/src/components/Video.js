import React from 'react';
import ytDFormat from 'youtube-duration-format';

import CollectButton from './CollectButton';

function Video(props) {

    return (
        <div className="video col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div>
                <a href={`/video/${props.id}`}>
                    <img className="col-sm-12" src={props.pic.url} />
                </a>
                <div className="mid">
                    <CollectButton
                        id ={props.id}
                    />
                    <div>{ytDFormat(props.length)}</div>
                </div>
                <h4>{props.title}</h4>

            </div>
        </div>
    );
}

export default Video;