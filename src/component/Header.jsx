import { useState, useEffect } from "react";
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
  ListItemText,
  Box,
  Button,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import MailIcon from "@mui/icons-material/Mail";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import RISHAV_LOGO from "../assets/svg/New-RS-LOGO.svg";
import { Link } from "react-scroll";
import { useColorMode } from "../context/ColorModeContext";

const RESUME_LINK =
  "https://drive.google.com/file/d/1z4s2_-ckbB7atVTyBj852mlgAE-xL_wK/view?usp=share_link";

const navigationLinks = [
  { text: "Home", icon: <HomeIcon />, href: "home" },
  { text: "About", icon: <PersonIcon />, href: "about" },
  { text: "Experience", icon: <WorkIcon />, href: "experience" },
  { text: "Education", icon: <SchoolIcon />, href: "education" },
  { text: "Projects", icon: <CodeIcon />, href: "projects" },
  { text: "Contact", icon: <MailIcon />, href: "contact" },
];

const Header = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = mode === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setDrawerOpen(open);
  };

  const navBg = isDark
    ? scrolled
      ? "rgba(8, 8, 16, 0.94)"
      : "rgba(8, 8, 16, 0.5)"
    : scrolled
    ? "rgba(248, 248, 255, 0.96)"
    : "rgba(248, 248, 255, 0.7)";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        backdropFilter: "blur(20px)",
        backgroundColor: navBg,
        borderBottom: "1px solid",
        borderColor: "divider",
        transition: "background-color 0.4s ease",
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 1, minHeight: "64px" }}>
        {/* Brand */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src={RISHAV_LOGO}
            alt="Rishav Singh logo"
            style={{
              height: 34,
              filter: isDark ? "brightness(1.3)" : "brightness(0.7) saturate(1.2)",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              fontSize: "1.05rem",
              letterSpacing: "0.06em",
              background: "linear-gradient(135deg, #8178f8 0%, #00c8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            RISHAV.DEV
          </Typography>
        </Box>

        {/* Desktop nav */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                smooth
                duration={500}
                offset={-70}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  component="span"
                  sx={{
                    display: "block",
                    px: 1.5,
                    py: 0.75,
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    color: "text.secondary",
                    cursor: "pointer",
                    borderRadius: 1,
                    transition: "color 0.2s ease, background-color 0.2s ease",
                    "&:hover": {
                      color: "text.primary",
                      backgroundColor: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(108,95,255,0.07)",
                    },
                  }}
                >
                  {link.text}
                </Typography>
              </Link>
            ))}

            {/* Theme toggle */}
            <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
              <IconButton
                onClick={toggleColorMode}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                size="small"
                sx={{
                  ml: 0.5,
                  color: isDark ? "#f0c040" : "primary.main",
                  backgroundColor: isDark
                    ? "rgba(240,192,64,0.1)"
                    : "rgba(108,95,255,0.08)",
                  border: "1px solid",
                  borderColor: isDark
                    ? "rgba(240,192,64,0.25)"
                    : "rgba(108,95,255,0.2)",
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(240,192,64,0.18)"
                      : "rgba(108,95,255,0.15)",
                    transform: "rotate(20deg)",
                  },
                }}
              >
                {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
            </Tooltip>

            <RefLink
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", ml: 1.5 }}
            >
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: isDark
                    ? "rgba(129,120,248,0.5)"
                    : "rgba(108,95,255,0.5)",
                  color: "primary.light",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  px: 2,
                  "&:hover": {
                    backgroundColor: "rgba(108,95,255,0.1)",
                    borderColor: "primary.main",
                  },
                }}
              >
                Resume
              </Button>
            </RefLink>
          </Box>
        )}

        {/* Mobile controls */}
        {isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
              <IconButton
                onClick={toggleColorMode}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                size="small"
                sx={{
                  color: isDark ? "#f0c040" : "primary.main",
                  "&:hover": { transform: "rotate(20deg)" },
                }}
              >
                {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
            <IconButton
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ color: "text.primary" }}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 270,
            borderLeft: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ color: "text.secondary" }}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1, flexGrow: 1 }}>
          {navigationLinks.map((link) => (
            <ListItem
              key={link.href}
              onClick={toggleDrawer(false)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(129,120,248,0.08)"
                    : "rgba(108,95,255,0.07)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "primary.main", minWidth: 40 }}>
                {link.icon}
              </ListItemIcon>
              <Link
                to={link.href}
                smooth
                duration={500}
                offset={-70}
                style={{ textDecoration: "none", flex: 1 }}
              >
                <ListItemText
                  primary={link.text}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: "text.primary",
                    fontSize: "0.95rem",
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>

        <Box sx={{ p: 2 }}>
          <RefLink
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: "rgba(108,95,255,0.5)",
                color: "primary.light",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(108,95,255,0.1)",
                  borderColor: "primary.main",
                },
              }}
            >
              View Resume
            </Button>
          </RefLink>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
