import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

function SimpleMenu() {
  const useStyles = makeStyles(({ palette, ...theme }) => ({
    projectName: {
      marginLeft: 24,
      [theme.breakpoints.down("sm")]: {
        marginLeft: 4,
      },
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        variant="outlined"
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Sort By
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link className={classes.menuItem} to="/pages/leader-board-page">
        <MenuItem onClick={handleClose}>
          Default
          </MenuItem>
          </Link>
      <Link className={classes.menuItem} to="/page-layouts/leader-board-school">
        <MenuItem onClick={handleClose}>
          My School
          </MenuItem>
          </Link>
      <Link className={classes.menuItem} to="/page-layouts/leader-board-grade">
        <MenuItem onClick={handleClose}>
          My Grade
          </MenuItem>
          </Link>
      </Menu>
    </div>
  );
}

export default SimpleMenu;
