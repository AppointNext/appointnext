import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Badge,
  Hidden,
  useMediaQuery,
  CssBaseline,
} from "@mui/material";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import Logo from "../utils/Logo";
import LogoText from "../utils/LogoText";

const Sidebar = ({ showIconsOnly }) => {
  const [, , removeCookie] = useCookies(["refreshToken", "accessToken"]);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const response = await axios.post("http://127.0.0.1:8000/api/logout", {
      username,
    });
    if (response.data.success === true) {
      removeCookie("refreshToken", { path: "/" });
      removeCookie("accessToken", { path: "/" });
      localStorage.removeItem("username");
      navigate("/login");
    }
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Hidden xlUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <IoMenuSharp />
            </IconButton>
          </Hidden>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <FaBell />
            </Badge>
          </IconButton>
          <IconButton onClick={handleMenuOpen}>
            <Avatar />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Hidden lgDown={!showIconsOnly}>
        <Drawer
          variant={isLargeScreen ? "permanent" : "temporary"}
          open={isLargeScreen || isDrawerOpen}
          onClose={toggleDrawer}
        >
          <div
            role="presentation"
            onClick={!isLargeScreen ? toggleDrawer : undefined}
            onKeyDown={!isLargeScreen ? toggleDrawer : undefined}
          >
            <List>
              <ListItem>{showIconsOnly ? <Logo /> : <LogoText />}</ListItem>
              <ListItem button component={Link} to="/overview">
                <ListItemIcon>
                  <HiOutlineSquares2X2 />
                </ListItemIcon>
                {!showIconsOnly && <ListItemText primary="Overview" />}
              </ListItem>
              <ListItem button component={Link} to="/appointments">
                <ListItemIcon>
                  <SlBookOpen />
                </ListItemIcon>
                {!showIconsOnly && <ListItemText primary="Appointments" />}
              </ListItem>
              <ListItem button component={Link} to="/doctors">
                <ListItemIcon>
                  <FaUserDoctor />
                </ListItemIcon>
                {!showIconsOnly && <ListItemText primary="Doctors" />}
              </ListItem>
              <ListItem button component={Link} to="/Chats">
                <ListItemIcon>
                  <AiOutlineMessage />
                </ListItemIcon>
                {!showIconsOnly && <ListItemText primary="Chat" />}
              </ListItem>
              <ListItem button component={Link} to="/Profile">
                <ListItemIcon>
                  <AiOutlineMessage />
                </ListItemIcon>
                {!showIconsOnly && <ListItemText primary="Profile" />}
              </ListItem>
              <ListItem button component={Link} to="/settings">
                <ListItemIcon>
                  <IoSettingsOutline />
                </ListItemIcon>
                {!showIconsOnly && <ListItemText primary="Settings" />}
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
};

export default Sidebar;
