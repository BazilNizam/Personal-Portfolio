import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Twitter from "@material-ui/icons/Twitter";
import { GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction href="https://www.linkedin.com/in/bazil-nizam-15744215a/"icon={<LinkedIn />} className={classes.root} />
      <BottomNavigationAction href="https://twitter.com/BazilNizam" icon={<Twitter />} className={classes.root} />
      <BottomNavigationAction href="https://github.com/BazilNizam"icon={<GitHub />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
