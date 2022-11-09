import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { getWallet } from '../redux/slices/walletSlicer';
import { useDispatch, useSelector } from 'react-redux';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import {
  Amount,
  Profit,
  Shares,
  // Divident,
} from '../components/Images';

import { MainListItems } from './MainListItems';

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

const WalletContent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const [TotalUsers, setTotalUsers] = useState('loading ...');
  const [wallet, setWallet] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const walletData = useSelector((store) => store.wallet);
  console.log('wallet data: ', walletData);

  console.log('USER DATA:', user.id);

  useEffect(() => {
    (async () => {
      await dispatch(getWallet(user));
    })();
  }, []);

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
            <Grid container spacing={3}>
              {/* small boxes */}
              <Grid item xs={4} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="dashboard-box"
                >
                  <h4 className="text-center">
                    Share Value: {walletData?.wallet?.shareValue}{' '}
                  </h4>
                </Paper>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="dashboard-box"
                >
                  <h4 className="text-center">
                    Share Amount: {walletData?.wallet?.shareAmount}
                  </h4>
                </Paper>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="dashboard-box"
                >
                  <h4 className="text-center">
                    Total Value Share:{walletData?.wallet?.totalValueShare}
                  </h4>
                </Paper>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="dashboard-box"
                >
                  {/* /> */}

                  <h4 className="text-center">
                    Project:{walletData?.wallet?.project}
                  </h4>
                </Paper>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="dashboard-box"
                >
                  <h4 className="text-center">
                    Dividend Total:{walletData?.wallet?.dividendTotal}
                  </h4>
                </Paper>
              </Grid>
              {/* Chart */}
              {/* <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid> */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default function Wallet() {
  return (
    <>
      <WalletContent />
    </>
  );
}
