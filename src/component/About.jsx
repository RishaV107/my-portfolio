import { Typography, Box, Grid, Paper, useTheme } from "@mui/material";
import DeveloperMeditation from "../assets/lotties/DeveloperMeditation.json";
import { useLottie } from "lottie-react";
import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { View } = useLottie({
    animationData: DeveloperMeditation,
    loop: true,
    style: { height: "100%", maxHeight: 420 },
  });

  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal({ threshold: 0.05 });

  const sectionBg = isDark
    ? `radial-gradient(ellipse at 25% 60%, rgba(129,120,248,0.10) 0%, transparent 55%), #0c0c1a`
    : `#ffffff`;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 5, md: 10, lg: 16 },
        background: sectionBg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid texture */}
      <Box
        aria-hidden="true"
        className="section-dot-grid"
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Section header */}
      <Box
        ref={titleRef}
        className="reveal"
        sx={{ textAlign: "center", mb: 8, position: "relative" }}
      >
        <Typography
          variant="overline"
          sx={{ color: "primary.main", letterSpacing: "0.15em", fontWeight: 700 }}
        >
          Get to know me
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, mt: 0.5, fontSize: { xs: "2rem", md: "2.6rem" } }}
        >
          About Me
        </Typography>
        <Box
          aria-hidden="true"
          sx={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg, #8178f8, #00c8ff)",
            borderRadius: 2,
            mx: "auto",
            mt: 2,
          }}
        />
      </Box>

      {/* Content */}
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        ref={contentRef}
        className="reveal"
        sx={{ position: "relative" }}
      >
        <Grid item xs={12} md={5}>
          <Box className="float-animation" sx={{ display: "flex", justifyContent: "center" }}>
            {View}
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              backgroundColor: isDark
                ? "rgba(255,255,255,0.04)"
                : "#ffffff",
              backdropFilter: isDark ? "blur(24px)" : "none",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(255,255,255,0.08)"
                : "rgba(108,95,255,0.15)",
              borderRadius: 3,
              position: "relative",
              overflow: "hidden",
              boxShadow: isDark
                ? "none"
                : "0 8px 40px rgba(108,95,255,0.10)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #8178f8, #00c8ff)",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                fontSize: { xs: "1rem", md: "1.05rem" },
              }}
            >
              I am a{" "}
              <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}>
                Software Engineer
              </Box>{" "}
              with 2+ years of full-stack development experience. Skilled in web
              technologies such as{" "}
              <Box component="span" sx={{ color: "secondary.main", fontWeight: 600 }}>
                HTML, CSS, JavaScript, TypeScript, React, and Node.js
              </Box>
              . I design and develop responsive web applications, and collaborate
              effectively with teams. I&apos;m always seeking to leverage my technical
              expertise and problem-solving skills in challenging and dynamic roles.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
