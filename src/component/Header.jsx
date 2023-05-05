import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import MailIcon from "@mui/icons-material/Mail";
import RISHAV_LOGO from "../assets/svg/New-RS-LOGO.svg";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const navigationLinks = [
    { text: "Home", icon: <HomeIcon />, href: "#" },
    { text: "About Me", icon: <PersonIcon />, href: "#" },
    { text: "Experience", icon: <WorkIcon />, href: "#" },
    { text: "Education", icon: <SchoolIcon />, href: "#" },
    { text: "Projects", icon: <CodeIcon />, href: "#" },
    { text: "Contact", icon: <MailIcon />, href: "#" },
  ];

  const renderDesktopNavLinks = () => (
    <Box sx={{ display: "flex" }}>
      {navigationLinks.map((link, index) => (
        <Button
          key={index}
          color="inherit"
          href={link.href}
          sx={{ ml: index !== 0 ? 2 : 0, color: "#000000" }} // Set color to black
        >
          {link.text}
        </Button>
      ))}
    </Box>
  );

  const renderMobileNavLinks = () => (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
      sx={{ "& .MuiDrawer-paper": { background: "#FFFFFF" } }}
    >
      <List sx={{ width: 250 }}>
        {navigationLinks.map((link, index) => (
          <ListItem
            key={index}
            button
            component="a"
            href={link.href}
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" sx={{ background: "#FFFFFF" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black" }}
        >
          <Box sx={{ display: "flex" }}>
            <img src={RISHAV_LOGO} alt="Logo" style={{ height: 40 }} />
            RISHAV.DEV
          </Box>
        </Typography>
        {isMobile ? (
          <IconButton color="black" edge="end" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          renderDesktopNavLinks()
        )}
      </Toolbar>
      {isMobile && renderMobileNavLinks()}
    </AppBar>
  );
};

export default Header;
