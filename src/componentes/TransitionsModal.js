import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {

    handleOpen()

  }, [])
  const handleOpen = () => {
    let opened = JSON.parse(window.localStorage.getItem('modalOpen')) || false
    console.log(opened);
    if (!opened) {
      setOpen(true);
      window.localStorage.setItem('modalOpen', true)
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Welcome!</h2>
            <p id="transition-modal-description">Don't know what movie to watch next?</p>
            <p id="transition-modal-description">
              <strong>Discovery</strong> Tab will show movie recommendations from a random selection of movie genres.
            </p>
            <p id="transition-modal-description">
              Clicking on the Movie Genre will load random movies from that genre. Hopefully you will find something new to watch from this selection.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

