import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="random-para">
            <h1>{props.username}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper eget duis at. Posuere ac ut consequat semper viverra nam libero justo. Risus viverra adipiscing at in tellus. Quis enim lobortis scelerisque fermentum dui faucibus in. Dui faucibus in ornare quam viverra. Est placerat in egestas erat imperdiet sed euismod.</p>
            <p>Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam.Eget egestas purus viverra accumsan. Elementum integer enim neque volutpat ac tincidunt vitae. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Convallis a cras semper auctor neque. Porta non pulvinar neque laoreet. Nisl purus in mollis nunc sed id semper risus. Purus faucibus ornare suspendisse sed nisi lacus sed.</p>
        </div>
    );
}

export default UserOutput