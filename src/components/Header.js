import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();

  const isLoginDataPresent = () => {
    return Boolean(localStorage.getItem("username"));
  }

  const [isLoggedIn, setIsLoggedIn] = useState(isLoginDataPresent());

  // useEffect(() => {
  //   setIsLoggedIn(isLoginDataPresent());
  // }, [isLoginDataPresent])

  const logoutUser = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.reload();
  }

  const exploreButton = (
    <Button
      className="explore-button"
      startIcon={<ArrowBackIcon />}
      variant="text"
      type="button"
      onClick={() => {history.push("/")}}
      >
      Back to explore
    </Button>
  );

  const actionBoard = (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Button variant="text" type="button" onClick={() => history.push("/login")}>Login</Button>
      <Button variant="contained" type="button" onClick={() => history.push("/register")}>Register</Button>
    </Stack>
  )

  const userDashBoard = (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Avatar src="./avatar.png" alt={localStorage.getItem("username")} />
      <p className="username-text">{localStorage.getItem("username")}</p>
      <Button variant="text" type="button" onClick={logoutUser}>Logout</Button>
    </Stack>
  );

    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {/* <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => {history.push("/")}}
        >
          Back to explore
        </Button> */}
        <Stack direction="row" alignItems="center" spacing={1}>
        {(hasHiddenAuthButtons) ? exploreButton: (isLoggedIn) ? userDashBoard : actionBoard}
        </Stack>
      </Box>
    );
};

export default Header;
