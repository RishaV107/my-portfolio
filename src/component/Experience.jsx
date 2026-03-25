import PropTypes from "prop-types";
import { Typography, Box, Grid, Paper, Chip, useTheme } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Working from "../assets/lotties/Working.json";
import { useLottie } from "lottie-react";
import useScrollReveal from "../hooks/useScrollReveal";

const steps = [
  {
    companyName: "Vorphy",
    position: "Software Engineer",
    workDuration: "April 2022 – Present",
    description:
      "Developed robust, scalable, modular, and API-centric infrastructures. Reduced API response time by 30%. Participated in architecture, design, and implementation of features using TypeScript/JavaScript, NodeJS, ReactJS, and Redis.",
    tags: ["TypeScript", "NodeJS", "ReactJS", "Redis"],
  },
  {
    companyName: "Ingenuity Gaming",
    position: "Associate Game Developer",
    workDuration: "January 2021 – March 2022",
    description:
      "Worked on the development of a robust web-based game with high scalability. Implemented REST APIs and participated in architecture, design, and implementation of game features using TypeScript, PixiJS, and PhaserJS.",
    tags: ["TypeScript", "PixiJS", "PhaserJS", "REST APIs"],
  },
  {
    companyName: "DuniyaKaGyan.com",
    position: "Web Developer Intern",
    workDuration: "August 2020 – December 2020",
    description:
      "Worked as a web developer responsible for creating new pages and keeping existing content up to date.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const ExperienceStep = ({ step, isLast }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const cardRef = useScrollReveal({ threshold: 0.1 });

  return (
    <Box
      ref={cardRef}
      className="reveal"
      sx={{ pl: 6, pb: isLast ? 0 : 5, position: "relative" }}
    >
      {/* Timeline dot */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: 10,
          top: 22,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #8178f8, #00c8ff)",
          boxShadow: isDark
            ? "0 0 14px rgba(129,120,248,0.7)"
            : "0 0 10px rgba(108,95,255,0.4)",
          zIndex: 1,
        }}
      />

      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, md: 3 },
          backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "#ffffff",
          backdropFilter: isDark ? "blur(20px)" : "none",
          border: "1px solid",
          borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(108,95,255,0.12)",
          borderRadius: 2.5,
          boxShadow: isDark ? "none" : "0 4px 20px rgba(108,95,255,0.07)",
          transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            borderColor: isDark
              ? "rgba(129,120,248,0.4)"
              : "rgba(108,95,255,0.35)",
            transform: "translateX(6px)",
            boxShadow: isDark
              ? "0 8px 32px rgba(0,0,0,0.3)"
              : "0 8px 32px rgba(108,95,255,0.12)",
          },
        }}
      >
        <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
          {step.position}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 1.5, alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <BusinessIcon sx={{ fontSize: "0.85rem", color: "primary.main" }} />
            <Typography
              variant="body2"
              sx={{ color: "primary.main", fontWeight: 600, fontSize: "0.85rem" }}
            >
              {step.companyName}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CalendarTodayIcon sx={{ fontSize: "0.85rem", color: "text.secondary" }} />
            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.82rem" }}>
              {step.workDuration}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}
        >
          {step.description}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {step.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: isDark
                  ? "rgba(129,120,248,0.1)"
                  : "rgba(108,95,255,0.08)",
                color: "primary.main",
                border: "1px solid",
                borderColor: isDark
                  ? "rgba(129,120,248,0.22)"
                  : "rgba(108,95,255,0.2)",
                fontSize: "0.72rem",
                height: 24,
              }}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

ExperienceStep.propTypes = {
  step: PropTypes.shape({
    position: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    workDuration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isLast: PropTypes.bool.isRequired,
};

const Experience = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { View } = useLottie({
    animationData: Working,
    loop: true,
    style: { width: "100%", maxHeight: 380 },
  });

  const titleRef = useScrollReveal();

  const sectionBg = isDark
    ? `radial-gradient(ellipse at 80% 30%, rgba(0,200,255,0.09) 0%, transparent 50%), #080810`
    : `linear-gradient(135deg, #f8f7ff 0%, #f0f5ff 100%)`;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 5, md: 10, lg: 14 },
        background: sectionBg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <Box ref={titleRef} className="reveal" sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="overline"
          sx={{ color: "secondary.main", letterSpacing: "0.15em", fontWeight: 700 }}
        >
          Work History
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, mt: 0.5, fontSize: { xs: "2rem", md: "2.6rem" } }}
        >
          My Experience
        </Typography>
        <Box
          aria-hidden="true"
          sx={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg, #00c8ff, #8178f8)",
            borderRadius: 2,
            mx: "auto",
            mt: 2,
          }}
        />
      </Box>

      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
        {/* Timeline */}
        <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
          <Box sx={{ position: "relative" }}>
            {/* Vertical line */}
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                left: 19,
                top: 22,
                bottom: 0,
                width: 2,
                background: isDark
                  ? "linear-gradient(to bottom, rgba(129,120,248,0.6), rgba(0,200,255,0.3), transparent)"
                  : "linear-gradient(to bottom, rgba(108,95,255,0.5), rgba(0,119,184,0.25), transparent)",
                borderRadius: 1,
              }}
            />
            {steps.map((step, index) => (
              <ExperienceStep
                key={step.companyName}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </Box>
        </Grid>

        {/* Lottie illustration */}
        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
          <Box sx={{ position: "sticky", top: 100 }}>{View}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
