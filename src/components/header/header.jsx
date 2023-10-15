import React, { FC } from 'react';
import styles from './header.module.scss';

import { Menu, MenuItem } from '@mui/material';

import calendarIcon from '../.././assets/svg/calendarIcon.svg';
import ellipsis from '../.././assets/svg/ellipsis.svg';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={calendarIcon} width="27" height="25" />
        <h1 className={styles.title}>Today</h1>
      </div>
      <img className={styles.menu} src={ellipsis} width="22" height="21" onClick={handleClick} />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>Completed</MenuItem>
        <MenuItem>In Progress</MenuItem>
        <MenuItem>Removed</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
