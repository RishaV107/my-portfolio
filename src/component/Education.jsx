import PropTypes from "prop-types";
import { Typography, Box, Grid, Paper, useTheme } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLottie } from "lottie-react";
import EducationLottie from "../assets/lotties/Education2.json";
import useScrollReveal from "../hooks/useScrollReveal";

const educationData = [
  {
    degree: "B.Tech | Computer Science & Engineering",
    institution: "KIET Group of Institutions",
    location: "Ghaziabad, UP",
    duration: "2017 – 2021",
  },
  {
    degree: "Intermediate | PCM & C++",
    institution: "Glenhill School",
    location: "Varanasi, UP",
    duration: "2015 – 2016",
  },
  {
    degree: "High School",
    institution: "Glenhill School",
    location: "Varanasi, UP",
    duration: "2013 – 2014",
  },
];

const EducationCard = ({ item, index }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // ✅ Reveal lives on the Box wrapper — Paper's own hover transition is never overridden.
  const wrapperRef = useScrollReveal({ threshold: 0.12 });

  const accentGradient =
    index % 2 === 0
      ? "linear-gradient(180deg, #8178f8, #00c8ff)"
      : "linear-gradient(180deg, #00c8ff, #8178f8)";

  return (
    <Box
      ref={wrapperRef}
      className="reveal"
      sx={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "stretch",
          borderRadius: 2.5,
          overflow: "hidden",
          border: "1px solid",
          borderColor: isDark
            ? "rgba(255,255,255,0.08)"
            : "rgba(108,95,255,0.12)",
          backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "#ffffff",
          backdropFilter: isDark ? "blur(20px)" : "none",
          boxShadow: isDark ? "none" : "0 4px 24px rgba(108,95,255,0.07)",
          /* Hover-only transitions — opacity NOT listed so CSS reveal is safe */
          transition:
            "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            borderColor: isDark
              ? "rgba(129,120,248,0.45)"
              : "rgba(108,95,255,0.35)",
            transform: "translateX(6px)",
            boxShadow: isDark
              ? "0 12px 40px rgba(0,0,0,0.32)"
              : "0 12px 40px rgba(108,95,255,0.12)",
          },
        }}
      >
        {/* Left accent bar */}
        <Box
          aria-hidden="true"
          sx={{
            width: 4,
            flexShrink: 0,
            background: accentGradient,
          }}
        />

        {/* Icon column */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 1.5, sm: 2 },
            py: 2.5,
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              p: 1,
              borderRadius: 1.5,
              background: isDark
                ? "rgba(129,120,248,0.12)"
                : "rgba(108,95,255,0.08)",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(129,120,248,0.25)"
                : "rgba(108,95,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SchoolIcon sx={{ color: "primary.main", fontSize: "1.3rem" }} />
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ py: 2.5, pr: 2.5, flexGrow: 1, minWidth: 0 }}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.35,
              mb: 0.75,
            }}
          >
            {item.degree}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "primary.main", fontWeight: 600, mb: 0.5 }}
          >
            {item.institution}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 0.5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
              <LocationOnIcon
                sx={{ fontSize: "0.8rem", color: "text.secondary" }}
              />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "0.78rem" }}
              >
                {item.location}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
              <CalendarTodayIcon
                sx={{ fontSize: "0.8rem", color: "text.secondary" }}
              />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "0.78rem" }}
              >
                {item.duration}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

EducationCard.propTypes = {
  item: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Education = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { View } = useLottie({
    animationData: EducationLottie,
    loop: true,
    style: { width: "100%", maxHeight: 420 },
  });

  const titleRef = useScrollReveal();

  const sectionBg = isDark
    ? `radial-gradient(ellipse at 20% 40%, rgba(129,120,248,0.10) 0%, transparent 55%),
       radial-gradient(ellipse at 80% 80%, rgba(0,200,255,0.06) 0%, transparent 45%),
       #0c0c1a`
    : "#ffffff";

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 5, md: 10, lg: 16 },
        background: sectionBg,
        position: "relative",
        /* Removed overflow:hidden — it was clipping card hover translateX */
      }}
    >
      {/* Dot grid texture */}
      <Box
        aria-hidden="true"
        className="section-dot-grid"
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.45,
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
          Academic Background
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mt: 0.5,
            fontSize: { xs: "2rem", md: "2.6rem" },
          }}
        >
          Education
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

      {/* Main layout */}
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        sx={{ position: "relative" }}
      >
        {/* Lottie — left side */}
        <Grid item xs={12} md={5}>
          <Box
            className="float-animation"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {View}
          </Box>
        </Grid>

        {/* Education cards — right side */}
        <Grid item xs={12} md={7}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {educationData.map((item, index) => (
              <EducationCard key={item.degree} item={item} index={index} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
