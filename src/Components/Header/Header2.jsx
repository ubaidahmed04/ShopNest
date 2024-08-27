import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logoimg from "../../Images/logo.png";
import ShopImg from "../../Images/shop.png";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact","Products"];

function DrawerAppBar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        fontWeight: 800,
        textAlign: "center",
        "&:hover": {
          backgroundColor: "#c3c3c3", // Change to your desired color
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <img
        src={logoimg}
        width={"70px"}
        alt="Logo"
        style={{ margin: "0 auto" }}
      />

      <Divider />
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
          
            <ListItemButton
              component={Link}
              to={`/${item.toLowerCase()}`}
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "#c3c3c3", // Change to your desired color
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#FFFFFF", position: "fixed" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: "auto", display: { sm: "none" } }}
          >
            <span >
              <i className="fa-solid fa-bars fa-2x menu-icon"></i>
            </span>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to={"/"}>
              <img
                src={logoimg}
                width={"70px"}
                alt="Logo"
                // remove margin auto for logo 
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#000000",
                  transition:"transform 0.3s,ease 0.3s",

                  "&:hover": {
                    backgroundColor: "#FFDD10",
                    transform: "translate(-4px)"
                  },
                }}
                component={Link}
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Link to={"/register"}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#FFDD10" }}
              color="success"
              sx={{ ml: "auto" }}
            >
              Sign Up
            </Button>
          </Link>
          
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
