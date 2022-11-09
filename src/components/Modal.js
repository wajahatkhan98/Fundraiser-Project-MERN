import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { Divider } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              className="modal-main-heading"
              style={{
                display: 'flex',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '90%',
                }}
                variant="Top"
              >
                Sell Your Items{' '}
              </Box>
              <Box style={{ display: 'flex', width: '10%' }}>
                <ClearIcon />
              </Box>
            </div>
            <Divider style={{ backgroundColor: 'gray' }} />
            <div
              style={{
                display: 'flex',
              }}
              className="modal-content"
            >
              <Grid container>
                <Grid item style={{ display: 'flex' }}>
                  {' '}
                  <Grid item>
                    <LocalOfferIcon
                      style={{ display: 'flex', justifyContent: 'start' }}
                    />
                  </Grid>
                  Set Your Price
                </Grid>
              </Grid>
              <Divider style={{ height: '1em', backgroundColor: '#fffff' }} />
            </div>
            <div>
              <Grid
                container
                style={{ display: 'flex', flexDirection: 'column-reverse' }}
              >
                <Grid item>
                  Price
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              <Divider style={{ height: '1em', backgroundColor: '#fffff' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Grid container>
                <Grid item>Fees</Grid>
                <Grid item>
                  <ErrorOutlineIcon />
                </Grid>
              </Grid>
              <Grid container>
                <br />
                <div>
                  <Grid item style={{ display: 'flex', fontSize: 'smaller' }}>
                    OpenSea Fee{' '}
                    <Box
                      component={'span'}
                      width={'320px'}
                      borderBottom={'2px solid black'}
                    />{' '}
                    2.50%
                  </Grid>
                  <Grid item style={{ display: 'flex', fontSize: 'smaller' }}>
                    Creator Royalty{' '}
                    <Box
                      component={'span'}
                      width={'310px'}
                      borderBottom={'2px solid black'}
                    />{' '}
                    10.00%
                  </Grid>
                </div>
                <Divider style={{ height: '1em', backgroundColor: '#fffff' }} />
              </Grid>

              <Divider style={{ height: '1em', backgroundColor: 'white' }} />
              <Grid container justifyContent="space-between">
                <Grid item>Total Earnings</Grid>
                <Grid item>
                  <Grid item container flexDirection="column">
                    <Grid item>
                      {' '}
                      <h5>0.1112343</h5>{' '}
                    </Grid>
                    <Grid item color="gray" marginTop={-1}>
                      {' '}
                      (0.123123){' '}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Grid container>
                <Grid item>Schedule Listing</Grid>
                <Grid item>
                  <ScheduleIcon />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  Listed sell price and scheduled dates can not be edited once
                  your item is listed
                </Grid>
                <Grid item>
                  <ErrorOutlineIcon />
                </Grid>
              </Grid>
            </div>
            <Button variant="outlined" color="secondary">
              Complete Listing
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
