// import React from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Bookmarks from "@mui/icons-material/Bookmarks";
import GradeIcon from '@mui/icons-material/Grade';
import LogoutIcon from "@mui/icons-material/Logout";
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useNavigate } from "react-router-dom";
////active the menu button
const NavBar = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  }
  const list = (anchor) => (
    <Box sx={{height:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>פרופיל</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem onClick={()=>navigate('/Form')}>
            <ListItemButton>
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText>מומלצים עבורך</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
             
            >
              <ListItemIcon>
                <Bookmarks />
              </ListItemIcon>
              <ListItemText>תחומי העניין שלי</ListItemText>
            </ListItemButton>
          </ListItem>

        <ListItem onClick={()=>navigate('/Chat')}>
          <ListItemButton
        
          >
            <ListItemIcon>
              <ChatBubbleIcon />
            </ListItemIcon >
            <ListItemText>צ׳אט</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
        
          >
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText>הכיתה שלי</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
      <Box>
      <ListItem onClick={()=>navigate('/')}>
          <ListItemButton
        
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>התנתק</ListItemText>
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" style={{ backgroundColor: "#ededf4" }}>
            <div style={{width:'100vw',display:'flex',justifyContent:'flex-end'}}>
          <Toolbar>
            {/* icon of menu button with his funcnality */}
            <div style={{marginLeft:'auto'}} >
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton 
                    onClick={toggleDrawer(anchor, true)}
                    style={{ color: "black" }}
                  >
                    {" "}
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ marginLeft: "2%", color: "black" }}
            >
            </Typography>
          </Toolbar>
          </div>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;