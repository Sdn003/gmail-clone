import React, { Fragment } from 'react';
import './Header.css'
import { Avatar, IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/counter/userSlice';
import { auth } from '../Firebase';

function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut()
    .then(() => {
      dispatch(logout());
    })
  }

  return (
    <Fragment>
      <div className="header-nav">
        <div className="header-nav-left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0ux_8_Xl2czTeeELR5JNkPsLVJIctJSdfIIi-HaWe35Q0d8wkcL6jK-Lh_k8aV2zXQ&usqp=CAU"
            alt="Gmail-icon"
          />
        </div>
        <div className="header-nav-middle">
          <IconButton>
            <SearchIcon style={{ color: "grey", background: "transparent" }} />
          </IconButton>
          <input type="text" placeholder="Search Email" />
          <IconButton>
            <ArrowDropDown className="search__arrow" />
          </IconButton>
        </div>
        <div className="header-nav-right">
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
            <Avatar
              src={user?.photoURL} onClick={signOut} style={{cursor : "pointer", marginRight : "20px"}}
            />
        </div>
      </div>
    </Fragment>
  );
}

export default Header