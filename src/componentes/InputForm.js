import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, withRouter } from "react-router-dom";
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

const InputForm = ({ handleSubmit }) => {

  let history = useHistory();
  const classes = useStyles();

  const [valorInput, setValorInput] = useState("");

  const handleInputChange = (e) => {
    setValorInput(e.target.value);
  };
  const handleForm = async (e) => {

    e.preventDefault();

    if (!valorInput) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must search for something!'
      })
    } else {
      setValorInput("");
      history.push(`/search/${valorInput}`)
    }

  }

  return (
    <form
      onSubmit={handleForm}
      className={classes.root} noValidate autoComplete="off">

      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={handleInputChange}
          value={valorInput}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </form>
  );
};

export default withRouter(InputForm)