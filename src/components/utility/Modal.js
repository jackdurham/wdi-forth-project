import React from 'react';
import Popup from 'reactjs-popup';

const Modal = ({ user }) => {
  return(
    <Popup trigger={
      <div>
        <div className="card-body text-left">
          <p><span>Following: { user.following.length}</span> | <span>Followers: { user.followers.length}</span></p>
          <div className="popup-content">
            <span>TEST</span>
          </div>
        </div>
      </div>} modal position="top center" closeOnDocumentClick>
    </Popup>
  );
};

export default Modal;
