import React from 'react'; 


const YouTubeEmbed = (props) => {
    return (
        <div className="video-responsive">
            <iframe 
            width="853"
            height="480"
            src={props.lessonVidLink}
            frameBorder="0"
            allowFullScreen
            title={props.lessonName}
            > 
            </iframe>
        </div>
    )
}

export default YouTubeEmbed; 