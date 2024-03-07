import React, { useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import useDrawer from '../utils/hooks/useDrawer';
import { sanitizedUrl } from '../../api';
import { useInitializeWallet } from '../utils/hooks/useInitializeWallet';

export default function Navbar({ className }) {
  const { open, DrawerToogle } = useDrawer();
  useInitializeWallet();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.userDetails);
  const currentUserCoins = useSelector((state) => state.wallet.coins);
  const localUser = JSON.parse(localStorage.getItem('user'));
  const currentUser = user ?? localUser;
  const { logout } = getActions(dispatch);
  const handleLogout = () => {
    logout();
    navigate('/login');
    // history.push("/login");
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const opendropdown = Boolean(anchorEl);
  const id = opendropdown ? 'simple-popover' : undefined;

  const inputElement = useRef();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
      className={className}
    >
      <AppBar position='static'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: 'green',
          }}
        >
          <Box display='flex' alignItems='center'>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={DrawerToogle}
              edge='start'
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <AiOutlineMenu />
            </IconButton>

            <Typography
              component={Link}
              to={sanitizedUrl.Dashboard}
              variant='h6'
              noWrap
            >
              My App
            </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
            Welcome, {currentUser?.username}
            <IconButton
              ref={inputElement}
              aria-label='account of current user'
              aria-controls={id}
              aria-haspopup='true'
              onClick={handleClick}
              color='inherit'
            >
              <MdAccountCircle />
            </IconButton>
            <Dropdown
              handleLogout={handleLogout}
              open={opendropdown}
              id={id}
              anchorEl={anchorEl}
              handleClose={handleClose}
              currentUserCoins={currentUserCoins}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
