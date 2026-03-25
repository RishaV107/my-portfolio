/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import { Typography, Box, Paper, Stack, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import useScrollReveal from "../hooks/useScrollReveal";

const EMAIL = "rishavsingh107@gmail.com";
const TWITTER_URL = "https://twitter.com/RishavS107";
const TWITTER_HANDLE = "@RishavS107";

/**
 * RevealWrapper — owns the scroll-reveal animation so the inner element's
 * hover `transition` never overrides the CSS .reveal opacity/transform.
 */
const RevealWrapper = ({ children, delay }) => {
  const ref = useScrollReveal({ threshold: 0.12 });
  return (
    <Box
      ref={ref}
      className="reveal"
      sx={{ transitionDelay: delay ? `${delay}s` : "0s" }}
    >
      {children}
    </Box>
  );
};

RevealWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

RevealWrapper.defaultProps = {
  delay: 0,
};

/**
 * ContactLink — purely presentational; no scroll-reveal logic here.
 * Rendered as a plain <a> via `component="a"` so Paper stays block-level.
 */
const ContactLink = ({ href, icon, label, subLabel }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Paper
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: { xs: 2, sm: 2.5 },
        textDecoration: "none",
        color: "inherit",
        /* Glass in dark, solid-white in light */
        backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "#ffffff",
        backdropFilter: isDark ? "blur(20px)" : "none",
        border: "1px solid",
        borderColor: isDark
          ? "rgba(255,255,255,0.09)"
          : "rgba(108,95,255,0.15)",
        borderRadius: 2.5,
        cursor: "pointer",
        boxShadow: isDark ? "none" : "0 4px 20px rgba(108,95,255,0.07)",
        /* Hover-only transitions — opacity NOT listed so CSS reveal is safe */
        transition:
          "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          borderColor: isDark
            ? "rgba(129,120,248,0.5)"
            : "rgba(108,95,255,0.42)",
          transform: "translateY(-4px)",
          boxShadow: isDark
            ? "0 14px 40px rgba(0,0,0,0.35)"
            : "0 14px 40px rgba(108,95,255,0.14)",
          backgroundColor: isDark
            ? "rgba(129,120,248,0.06)"
            : "rgba(108,95,255,0.03)",
        },
      }}
    >
      {/* Icon badge */}
      <Box
        sx={{
          p: 1.25,
          borderRadius: 1.5,
          backgroundColor: isDark
            ? "rgba(129,120,248,0.13)"
            : "rgba(108,95,255,0.09)",
          border: "1px solid",
          borderColor: isDark
            ? "rgba(129,120,248,0.28)"
            : "rgba(108,95,255,0.22)",
          color: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>

      {/* Text */}
      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "0.75rem", mb: 0.25 }}
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{
            color: "text.primary",
            /* Prevent long email from overflowing on small screens */
            wordBreak: "break-all",
            lineHeight: 1.3,
          }}
        >
          {subLabel}
        </Typography>
      </Box>
    </Paper>
  );
};

ContactLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  subLabel: PropTypes.string.isRequired,
};

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal({ threshold: 0.1 });

  const sectionBg = isDark
    ? `radial-gradient(ellipse at 50% 50%, rgba(129,120,248,0.13) 0%, transparent 60%),
       #0c0c1a`
    : `linear-gradient(135deg, #f5f3ff 0%, #eef4ff 100%)`;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 5, md: 10, lg: 16 },
        background: sectionBg,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Ambient glow (dark only) */}
      {isDark && (
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(129,120,248,0.06)",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Section heading */}
      <Box
        ref={titleRef}
        className="reveal"
        sx={{ mb: 4, position: "relative" }}
      >
        <Typography
          variant="overline"
          sx={{ color: "primary.main", letterSpacing: "0.15em", fontWeight: 700 }}
        >
          Let's connect
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, mt: 0.5, fontSize: { xs: "2rem", md: "2.6rem" } }}
        >
          Contact
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

      {/* Subtitle */}
      <Box ref={subtitleRef} className="reveal" sx={{ position: "relative" }}>
        <Typography
          variant="h5"
          sx={{
            color: "text.secondary",
            mb: 5,
            lineHeight: 1.65,
            fontWeight: 400,
            fontSize: { xs: "1.05rem", md: "1.2rem" },
          }}
        >
          Don't be shy — hit me up! 👋
        </Typography>
      </Box>

      {/* Contact cards — each wrapped in its own RevealWrapper for stagger */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 620,
        }}
      >
        <Stack spacing={2.5}>
          <RevealWrapper delay={0.1}>
            <ContactLink
              href={`mailto:${EMAIL}`}
              icon={<EmailIcon />}
              label="Email me at"
              subLabel={EMAIL}
            />
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <ContactLink
              href={TWITTER_URL}
              icon={<TwitterIcon />}
              label="Tweet me at"
              subLabel={TWITTER_HANDLE}
            />
          </RevealWrapper>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
