/* eslint-disable react/no-unescaped-entities */
import {
  Typography,
  Grid,
  Box,
  Avatar,
  Stack,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HTML_LOGO from "../assets/svg/html-5.svg";
import CSS_LOGO from "../assets/svg/css-3.svg";
import JAVASCRIPT_LOGO from "../assets/svg/javascript.svg";
import TYPESCRIPT_LOGO from "../assets/svg/typescript-icon.svg";
import REACT_LOGO from "../assets/svg/react.svg";
import NODEJS_LOGO from "../assets/svg/nodejs.svg";
import NESTJS_LOGO from "../assets/svg/nestjs.svg";
import MYSQL_LOGO from "../assets/svg/mysql.svg";
import { TypeAnimation } from "react-type-animation";

const LINKEDIN_URL = "https://www.linkedin.com/in/rishav-singh-2b0277158/";
const GITHUB_URL = "https://github.com/RishaV107";
const PROFILE_IMAGE = "https://avatars.githubusercontent.com/u/42450401?v=4";

const techStack = [
  { src: HTML_LOGO, alt: "HTML5", className: "html" },
  { src: CSS_LOGO, alt: "CSS3", className: "css" },
  { src: JAVASCRIPT_LOGO, alt: "JavaScript", className: "javascript" },
  { src: TYPESCRIPT_LOGO, alt: "TypeScript", className: "typescript" },
  { src: REACT_LOGO, alt: "React", className: "react" },
  { src: NODEJS_LOGO, alt: "Node.js", className: "nodejs" },
  { src: NESTJS_LOGO, alt: "NestJS", className: "nestjs" },
  { src: MYSQL_LOGO, alt: "MySQL", className: "mysql" },
];

const MainContent = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const heroBg = isDark
    ? `radial-gradient(ellipse at 65% 40%, rgba(129,120,248,0.22) 0%, transparent 55%),
       radial-gradient(ellipse at 20% 80%, rgba(0,200,255,0.14) 0%, transparent 50%),
       #080810`
    : `linear-gradient(135deg, #ece9ff 0%, #dff0ff 55%, #f8f8ff 100%)`;

  return (
    <Box
      aria-label="Hero section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: heroBg,
      }}
    >
      {/* Decorative ambient blobs (dark only) */}
      {isDark && (
        <>
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: "15%",
              right: "8%",
              width: 360,
              height: 360,
              borderRadius: "50%",
              background: "rgba(129, 120, 248, 0.08)",
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              bottom: "20%",
              left: "5%",
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: "rgba(0, 200, 255, 0.07)",
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
          />
        </>
      )}

      {/* Hero content */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ px: { xs: 3, sm: 5, md: 10, lg: 14 }, pt: { xs: 6, md: 0 } }}
        spacing={{ xs: 4, md: 6 }}
      >
        {/* Text */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: "0.8rem",
                mb: 1,
                display: "block",
              }}
            >
              Hello, I'm
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.6rem",
                  sm: "3.4rem",
                  md: "3.8rem",
                  lg: "4.5rem",
                },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Rishav Singh
            </Typography>

            <Box sx={{ mb: 3, minHeight: "2.4rem" }}>
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: "1.05rem", sm: "1.25rem", md: "1.4rem" },
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #8178f8 0%, #00c8ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    1500,
                    "Full Stack Developer",
                    1500,
                    "Problem Solver",
                    1500,
                    "Lifelong Learner",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 4,
                maxWidth: 480,
                lineHeight: 1.75,
              }}
            >
              Feel free to reach out for collaborations, project inquiries, or
              just a friendly chat.
            </Typography>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <IconButton
                component="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                sx={{
                  color: isDark ? "text.primary" : "#24292f",
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(36,41,47,0.08)",
                  border: "1px solid",
                  borderColor: isDark
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(36,41,47,0.18)",
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.14)"
                      : "rgba(36,41,47,0.16)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                sx={{
                  color: "#0077b5",
                  backgroundColor: "rgba(0,119,181,0.1)",
                  border: "1px solid rgba(0,119,181,0.25)",
                  "&:hover": {
                    backgroundColor: "rgba(0,119,181,0.2)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 20px rgba(0,119,181,0.2)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>

        {/* Profile image */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, md: 2 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: -3,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #8178f8, #00c8ff)",
                zIndex: 0,
              }}
            />
            <Avatar
              src={PROFILE_IMAGE}
              alt="Rishav Singh profile photo"
              className={isDark ? "glow-pulse" : ""}
              sx={{
                width: { xs: 200, sm: 260, md: 310 },
                height: { xs: 200, sm: 260, md: 310 },
                border: `4px solid ${
                  isDark ? "#080810" : theme.palette.background.default
                }`,
                position: "relative",
                zIndex: 1,
                boxShadow: isDark
                  ? "none"
                  : "0 20px 60px rgba(108,95,255,0.2)",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Tech stack strip */}
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          pb: { xs: 5, md: 6 },
          borderTop: "1px solid",
          borderColor: "divider",
          pt: { xs: 3, md: 4 },
          px: { xs: 2, sm: 4, md: 6 },
          backgroundColor: isDark
            ? "rgba(255,255,255,0.015)"
            : "rgba(108,95,255,0.025)",
        }}
      >
        <Typography
          variant="overline"
          align="center"
          display="block"
          sx={{
            color: "text.secondary",
            mb: { xs: 2.5, md: 3 },
            letterSpacing: "0.2em",
            fontSize: "0.68rem",
          }}
        >
          Tech Stack
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2.5, sm: 3.5, md: 4 },
            maxWidth: 820,
            mx: "auto",
          }}
        >
          {techStack.map((tech) => (
            <Tooltip key={tech.alt} title={tech.alt} placement="top" arrow>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  cursor: "default",
                  /* Lift on hover — glow is handled entirely by CSS drop-shadow */
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-7px)",
                  },
                }}
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className={`tech-logo ${tech.className}`}
                />
                <Typography
                  component="span"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.58rem", sm: "0.63rem" },
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textAlign: "center",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    textTransform: "uppercase",
                  }}
                >
                  {tech.alt}
                </Typography>
              </Box>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
