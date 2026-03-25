import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const LINKEDIN_URL = "https://www.linkedin.com/in/rishav-singh-2b0277158/";
const GITHUB_URL = "https://github.com/RishaV107";
const TWITTER_URL = "https://twitter.com/RishavS107";

const socialLinks = [
  { href: LINKEDIN_URL, icon: <LinkedInIcon />, label: "LinkedIn profile", hoverColor: "#0077b5" },
  { href: GITHUB_URL, icon: <GitHubIcon />, label: "GitHub profile", hoverColor: "#e0e0e0" },
  { href: TWITTER_URL, icon: <TwitterIcon />, label: "Twitter profile", hoverColor: "#1da1f2" },
];

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: isDark ? "#050508" : "#ede9ff",
        borderTop: "1px solid",
        borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(108,95,255,0.15)",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        {/* Brand */}
        <Box sx={{ textAlign: "center", mb: 2.5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.08em",
              background: "linear-gradient(135deg, #8178f8 0%, #00c8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            RISHAV.DEV
          </Typography>
        </Box>

        {/* Social icons */}
        <Stack direction="row" justifyContent="center" spacing={1} sx={{ mb: 3 }}>
          {socialLinks.map(({ href, icon, label, hoverColor }) => (
            <IconButton
              key={label}
              component={Link}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                color: "text.secondary",
                transition: "color 0.2s ease, transform 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  color: hoverColor,
                  transform: "translateY(-3px)",
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(108,95,255,0.08)",
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>

        <Divider
          sx={{
            mb: 2.5,
            borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(108,95,255,0.12)",
          }}
        />

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "text.secondary", fontSize: "0.8rem" }}
        >
          &copy; {year} Rishav Singh. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
