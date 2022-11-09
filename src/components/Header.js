import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import '../assets/css/header.css';
import { Logo, WalletCardIcon, Logout } from './Images';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getWallet } from '../redux/slices/walletSlicer';
import DashboardIcon from '@mui/icons-material/Dashboard';

export function BasicCard() {
  const userData = useSelector((store) => store.user);
  const walletData = useSelector((store) => store.wallet);

  const { loading, error, user } = userData;

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/login');
  };

  return (
    <Card sx={{ minWidth: 275, padding: '20px 0' }}>
      <div className="text-center">
        <IconButton color="inherit" variant="contained">
          <Avatar sx={{ bgcolor: '#F1C9C9', color: '#E60E10' }}>N</Avatar>
        </IconButton>
      </div>
      <CardContent className="text-center">
        <Typography variant="h5" component="div">
          {userData?.user?.firstName}
        </Typography>
        <Typography variant="h6" component="div">
          {userData?.user?.email}
        </Typography>
      </CardContent>
      <div className="card-wallet d-flex my-3">
        <div>
          <img src={WalletCardIcon} className="mb-2" />
          <Typography
            variant="h6"
            component="span"
            className="mx-3"
            color="#E60E10"
          >
            Wallet
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="span" color="#E60E10">
            {walletData?.wallet?.totalValueShare}
          </Typography>
        </div>
      </div>
      <Link to={'/dashboard'}>
        <div className="card-wallet d-flex  my-3">
          {/* <img src={DashboardIcon} className="mb-2" />
           */}
          <DashboardIcon />
          <Typography
            variant="h6"
            component="span"
            className="mx-3"
            color="#E60E10"
          >
            Dashboard
          </Typography>
        </div>
      </Link>

      <CardActions className="justify-content-center">
        <Link to="/login">
          <button className="btn primary-btn ">
            {' '}
            <img src={Logout} /> Logout
          </button>
        </Link>
      </CardActions>
    </Card>
  );
}

function Header() {
  let { paramId } = useParams();
  const [auth, setAuth] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [paramVal, setParamVal] = useState('');
  const [TotalUsers, setTotalUsers] = useState('loading ...');

  const userData = useSelector((store) => store.user);
  const { loading, error, user } = userData;

  console.log('STORE', user?.id);

  console.log(paramVal);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setParamVal(paramId);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popOpen = Boolean(anchorEl);
  const id = popOpen ? 'simple-popover' : undefined;

  return (
    <>
      <header className="custom-header" id="custom-header">
        <div className="logo-section">
          <Link to="/">
            {' '}
            <img src={Logo} alt="logo" />{' '}
          </Link>
        </div>

        <div
          className={
            isShow ? 'header-main header-show' : 'header-main header-hide'
          }
        >
          <div className="mobile-header-top">
            <img src={Logo} />
            <i
              className="fa-solid fa-xmark cross-icon"
              onClick={(e) => setIsShow(false)}
            ></i>
          </div>
          <ul className="header-body">
            <li>
              <NavLink to={'/'}>BEGINNING</NavLink>
            </li>
            <li>
              <NavLink to={'/we-are-java'}>WE ARE JAVA</NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}>MENU</NavLink>
            </li>
            <li>
              <NavLink to={'/shop'}>SHOP</NavLink>
            </li>
            <li>
              <NavLink to={'/offices'}>BRANCH OFFICES</NavLink>
            </li>
            <li>
              <NavLink to={'/investment'}>INVESTMENT</NavLink>
            </li>
            <li>
              <NavLink to={'/race'}>RACE</NavLink>
            </li>
            <li>
              <NavLink to={'/blog'}>BLOG</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>CONTACT</NavLink>
            </li>

            {user ? (
              <li>
                <IconButton
                  color="inherit"
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  <Avatar sx={{ bgcolor: '#F1C9C9', color: '#E60E10' }}>
                    N
                  </Avatar>
                </IconButton>
                <Popover
                  id={id}
                  open={popOpen}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <BasicCard />
                </Popover>
              </li>
            ) : (
              <li>
                <NavLink to={'/login'}>LOGIN</NavLink>
                <NavLink to={'/registration'}>
                  <button className="btn primary-btn"> SIGNUP</button>
                </NavLink>
              </li>
            )}
          </ul>
          {/* <div className="header-bottom">
           
          </div> */}
        </div>
        <i className="fa-solid fa-bars mobile-show" onClick={setIsShow}></i>
        {/* <button className="btn primary-btn mobile-hide">DOWNLOAD APP</button> */}
      </header>
    </>
  );
}

export default Header;
