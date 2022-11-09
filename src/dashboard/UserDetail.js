import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apis from '../services';

import { MainListItems } from './MainListItems';
import { TextField } from '@mui/material';
import { getProfile } from '../redux/slices/userSlice';
import { getWallet } from '../redux/slices/walletSlicer';
import { useDispatch, useSelector } from 'react-redux';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#E21C21',
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
const mdTheme = createTheme();

const UserDetail = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(true);
  const [userData, setUserData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    (async () => {
      await dispatch(getProfile(user));
    })();
  }, []);

  const onChangeHandler = (event) => {
    const { id, value } = event.target;

    console.log({ id, value });

    setUserData({ ...userData, [id]: value });

    const updateUser = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        console.log(loading);
        const { firstName, lastName } = userData;
        console.log('user data', userData);
        const responce = await apis.updateUserProfile(
          '62fb7608ebf4c1ddf873e375',
          {
            firstName,
            lastName,
          }
        );
        toast.success('Your profile has been updated successfully', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log('user profile updated:', responce);
      } catch (error) {
        console.log('error: ', error);
        setLoading(false);
      }
    };
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popOpen = Boolean(anchorEl);
  const id = popOpen ? 'simple-popover' : undefined;

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer} className="chevron-icon">
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {MainListItems}
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography
              style={{ display: 'flex', justifyContent: 'center' }}
              variant="h5"
            >
              <div>
                <AccountBoxIcon />
              </div>
              Profile Details
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                variant="outlined"
              >
                <TextField
                  id="Name"
                  value={user.type}
                  onChange={onChangeHandler}
                />
                <TextField
                  id="firstName"
                  value={user.firstName}
                  onChange={onChangeHandler}
                  label={'firstName'}
                />
                <TextField
                  id="lastName"
                  value={user.lastName}
                  onChange={onChangeHandler}
                  label={'lastName'}
                />
                <TextField
                  id="phoneNo"
                  value={user.phoneNo}
                  onChange={onChangeHandler}
                  label={'phoneNo'}
                />
              </Card>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  onClick={onChangeHandler}
                  style={{ backgroundColor: '#FF0000', color: '#ffff' }}
                >
                  Edit
                </Button>
              </div>
            </Box>
            {/* <Box
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
              <Card variant="outlined">
                <Typography variant="h6" className="main">
                  <AccountBoxIcon /> {user.type}
                </Typography>
              </Card>
              <Card variant="outlined">
                <Typography variant="h6" className="main">
                  First Name: {user.firstName}
                </Typography>
              </Card>
              <Card variant="outlined">
                <Typography variant="h6" className="main">
                  Last Name: {user.lastName}
                </Typography>
              </Card>
              <Card variant="outlined">
                <Typography variant="h6" className="main">
                  <PhoneIcon />
                  {user.phoneNo}
                </Typography>
              </Card>
            </Box> */}

            {/* <Button
              className="btn btn-primary"
              style={{ boxSizing: 'border-box', backgroundColor: 'red' }}
              onClick={handleOpenModal}
            >
              update
            </Button> */}
            {/* <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="modal-title">
                    <Typography variant="h6">Update Your Details </Typography>
                  </div>
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Card variant="outlined">
                      <TextField
                        id="firstName"
                        value={userData.firstName}
                        onChange={onChangeHandler}
                        label={'firstName'}
                      />
                      <TextField
                        id="lastName"
                        value={userData.lastName}
                        onChange={onChangeHandler}
                      />
                      <TextField
                        id="phoneNo"
                        value={userData.phoneNo}
                        onChange={onChangeHandler}
                      />
                    </Card>
                  </Box>
                  <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    className="modal-Button"
                  >
                    <Button
                      style={{ backgrounColor: '#ff0000 ' }}
                      onClick={onChangeHandler}
                      variant="outlined"
                    >
                      Save Your Details
                    </Button>
                  </div>
                </Box>
              </Modal>
            </div> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserD() {
  return (
    <>
      <UserDetail />
    </>
  );
}
