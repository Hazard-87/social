import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyProfile from './MyProfile/MyProfile';

const Profile = (props) => {
  return (
    <div>
      <MyProfile
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
