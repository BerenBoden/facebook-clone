import React from 'react';
import './Widgets.scss';

function Widgets() {
    return (
        <div className="widgets">
            <iframe title="iframe" className="iframe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcodeunloaders&tabs=timeline&width=370&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=214153963233487" width="370" height="1500" style={{border: "none", overflow: "hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

export default Widgets
