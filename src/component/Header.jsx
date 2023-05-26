import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Link as RefLink,
  List,
  ListItem,
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
import { Link } from "react-scroll";

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
    { text: "Home", icon: <HomeIcon />, href: "home" },
    { text: "About Me", icon: <PersonIcon />, href: "about" },
    { text: "Experience", icon: <WorkIcon />, href: "experience" },
    { text: "Education", icon: <SchoolIcon />, href: "education" },
    { text: "Projects", icon: <CodeIcon />, href: "projects" },
    { text: "Contact", icon: <MailIcon />, href: "contact" },
  ];

  const renderDesktopNavLinks = () => (
    <Box sx={{ display: "flex" }}>
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          smooth={true}
          duration={500}
          sx={{ textDecoration: "none" }}
        >
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              color: "#000000",
              cursor: "pointer",
              marginRight: theme.spacing(3),
              textDecoration: "none",
              "&:hover": {
                backgroundImage:
                  "linear-gradient(to right, #434343 0%, black 100%)",

                color: "#FFFFFF",
                borderRadius: "5px",
              },
            }}
            p={1}
          >
            {link.text}
          </Typography>
        </Link>
      ))}
      <RefLink
        href="https://drive.google.com/file/d/1z4s2_-ckbB7atVTyBj852mlgAE-xL_wK/view?usp=share_link"
        target="_blank"
        sx={{ textDecoration: "none" }}
      >
        <Typography
          variant="subtitle1"
          component="span"
          sx={{
            color: "#FFFFFF",
            cursor: "pointer",
            marginRight: theme.spacing(3),
            textDecoration: "none",
            borderRadius: "5px",
            backgroundImage:
              "linear-gradient(to right, #434343 0%, black 100%)",
            "&:hover": {
              backgroundColor: "#8EC5FC",
              backgroundImage:
                "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",

              color: "#000000",
              borderRadius: "5px",
            },
          }}
          p={1}
        >
          Resume
        </Typography>
      </RefLink>
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
          <ListItem key={index} href={link.href} onClick={toggleDrawer(false)}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <Link
              key={index}
              to={link.href}
              smooth={true}
              duration={500}
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="subtitle1"
                component="span"
                sx={{
                  color: "#000000",
                  cursor: "pointer",
                  marginRight: theme.spacing(3),
                  textDecoration: "none",
                  "&:hover": {},
                }}
                onClick={toggleDrawer(false)}
              >
                {link.text}
              </Typography>
            </Link>
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
