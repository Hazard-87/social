import React from 'react';

import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
// import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';

import classes from './MyProfile.module.css';

const MyProfile = (props) => {
  if (!props.profile.photos) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.content}>
        <div className={classes.avatar}>
          <img src={props.profile.photos.large || userPhoto} />
        </div>
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <div className={classes.profile}>
          <p className={classes.name}>{props.profile.fullName}</p>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          <p>About Me: {props.profile.aboutMe}</p>
          <p>
            Facebook: <a href="https://ru-ru.facebook.com/">{props.profile.contacts.facebook}</a>
          </p>
        </div>
    </div>
  );
};

export default MyProfile;
