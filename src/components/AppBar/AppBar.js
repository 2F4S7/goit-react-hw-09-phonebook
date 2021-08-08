import React from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { AppBar, makeStyles } from "@material-ui/core";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#d8d8d8",
    width: "500px",
  },
  back: {
    backgroundColor: "#d8d8d8",
    border: "1px solid black",
    boxShadow: "0 2px 5px 2px rgb(0 0 0 / 90%)",
  },
});

const MyAppBar = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <AppBar className={classes.back}>
      <Container className={classes.root}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </AppBar>
  );
};

export default MyAppBar;
