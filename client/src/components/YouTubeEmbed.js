import React from 'react'; 


const YouTubeEmbed = (props) => {
    console.log(props);
    return (
        <div className="video-responsive">
            <iframe width="560" height="315"
             src={props.lessonVidLink} 
             title="YouTube video player" frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
        </div>
    )
}

export default YouTubeEmbed; 