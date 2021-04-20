import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.Container}>
    <img src={avatar} alt="" width="32" className={styles.Avatar} />
    <span className={styles.Name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
