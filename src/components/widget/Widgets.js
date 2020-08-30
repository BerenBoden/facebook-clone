import React from 'react';
import './Widgets.scss';

function Widgets() {
    return (
        <div className="widgets">
            {/**2:44:10 for src*/}
            <iframe className="iframe" title="myFrame" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcodeunloaders%2Fposts%2F164422328555282%3A0&show_text=true&width=552&appId=214153963233487&height=530" width="340" height="100%" style={{border: "none", overflow: "hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media">
            </iframe>
        </div>
    )
}

export default Widgets
