import React from 'react';
import './StoryReel.scss'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimple.wikipedia.org%2Fwiki%2FBlack&psig=AOvVaw2Dxe9RDiOPgecp8OT02RTp&ust=1598835736912000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjp8rLdwesCFQAAAAAdAAAAABAD" profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu-sAvXdYl-AekOJIcbcpSu8zEB_jB-Gf_t81vzb=s32-c-mo" title="name"/>
            <Story image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimple.wikipedia.org%2Fwiki%2FBlack&psig=AOvVaw2Dxe9RDiOPgecp8OT02RTp&ust=1598835736912000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjp8rLdwesCFQAAAAAdAAAAABAD" profileSrc="" title="name"/>
            <Story image="" profileSrc="" title="name"/>
            <Story image="" profileSrc="" title="name"/>
            <Story image="" profileSrc="" title="name"/>
        </div>
    )
}

export default StoryReel
