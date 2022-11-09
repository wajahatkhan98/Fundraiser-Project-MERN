import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  whiteLogo,
  userIcon,
  userSearchIcon,
  walletIcon,
} from '../components/Images';

export const MainListItems = (
  <>
    <ListItemButton className="justify-content-center mt-3">
      <ListItemIcon>
        <Link to="/dashboard">
          <img src={whiteLogo} />
        </Link>
      </ListItemIcon>
    </ListItemButton>

    <ListItemButton className="flex-column align-items-center mt-3">
      <ListItemIcon>
        <Link to="/wallet">
          <img src={walletIcon} alt="wallet.png" />
        </Link>
      </ListItemIcon>
      <ListItemText className="text-white" primary="Wallet" />
    </ListItemButton>
    <ListItemButton className="justify-content-center mt-3">
      <ListItemIcon>
        <Link to="/userdetails">
          <img src={userIcon} alt="User.png" />
        </Link>
      </ListItemIcon>
    </ListItemButton>
    <ListItemButton className="justify-content-center mt-3">
      <ListItemIcon>
        <img src={userSearchIcon} alt="userSearchIcon.png" />
      </ListItemIcon>
    </ListItemButton>
  </>
);
