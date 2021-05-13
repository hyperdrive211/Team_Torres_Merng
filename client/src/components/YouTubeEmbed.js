import React from 'react'; 


const YouTubeEmbed = (props) => {
    console.log(props);
    return (
        <div className="video-responsive">
            <iframe width="560" height="315"
             src="https://www.youtube.com/embed/q1Ft2gUj7tw" 
             title="YouTube video player" frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
        </div>
    )
}

export default YouTubeEmbed; 