import ReactPlayer from "react-player/youtube"
import ReactSoundCloud from 'react-soundcloud-embedded'
import React, { FC } from 'react'



const ComponentPlayer: React.FC = () => {
    return <div>
        <ReactSoundCloud url="https://soundcloud.com/discover/sets/personalized-tracks::ivanstereotekk:819666556?si=f604d7f218f1409ab1c867edef15c659&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
    </div>;
  };

export default function getPlayer(){
    return <div>
    <ComponentPlayer/>
    </div>
}