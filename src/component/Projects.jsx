import PropTypes from "prop-types";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Link,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import BubbleAnimationImage from "../assets/images/BubbleAnimation.png";
import GitHubFinderImage from "../assets/images/GitHubFinder.png";
import BikeServicePortalImage from "../assets/images/BikeServicePortal.png";
import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
  {
    name: "Bike Service Portal",
    description:
      "A React web application providing a platform for bike owners to schedule and manage their service appointments conveniently.",
    githubLink: "https://github.com/RishaV107/Bike-Service-Portal",
    projectImage: BikeServicePortalImage,
    tags: ["React", "JavaScript"],
  },
  {
    name: "Synapsis",
    description:
      "A website providing information about various types of surgeries with a directory of specialized doctors for each procedure.",
    githubLink: "https://github.com/RishaV107/Synapsis",
    projectImage:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "GitHub Finder",
    description:
      "A React app integrated with the GitHub API to fetch and display detailed profile information for any GitHub user.",
    githubLink: "https://github.com/RishaV107/GitHub-Finder",
    projectImage: GitHubFinderImage,
    tags: ["React", "GitHub API"],
  },
  {
    name: "Bubble Animate",
    description:
      "A canvas-based JavaScript app that renders and animates bubbles on screen with smooth physics-inspired motion.",
    githubLink: "https://github.com/RishaV107/BubbleAnimate",
    projectImage: BubbleAnimationImage,
    tags: ["JavaScript", "Canvas API"],
  },
];

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // ✅ Reveal lives on a wrapper Box — separate from the Card's own hover transition.
  // This stops the Card's sx `transition` from overriding the CSS .reveal opacity animation.
  const wrapperRef = useScrollReveal({ threshold: 0.1 });

  return (
    <Box ref={wrapperRef} className="reveal" sx={{ height: "100%" }}>
      <Card
        elevation={0}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          borderRadius: 3,
          border: "1px solid",
          borderColor: isDark
            ? "rgba(255,255,255,0.08)"
            : "rgba(108,95,255,0.12)",
          backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "#ffffff",
          backdropFilter: isDark ? "blur(20px)" : "none",
          boxShadow: isDark ? "none" : "0 2px 20px rgba(108,95,255,0.07)",
          /* Hover-only transitions — no opacity here so reveal CSS is never overridden */
          transition:
            "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-10px)",
            borderColor: isDark
              ? "rgba(129,120,248,0.55)"
              : "rgba(108,95,255,0.45)",
            boxShadow: isDark
              ? "0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(129,120,248,0.18)"
              : "0 24px 60px rgba(108,95,255,0.18)",
          },
          "&:hover .project-overlay": { opacity: 1 },
          "&:hover .project-img": { transform: "scale(1.07)" },
        }}
      >
        {/* Image */}
        <Box sx={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
          <CardMedia
            component="img"
            height="185"
            image={project.projectImage}
            alt={`${project.name} screenshot`}
            className="project-img"
            sx={{
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s ease",
            }}
          />

          {/* Hover overlay with action buttons */}
          <Box
            className="project-overlay"
            aria-hidden="true"
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(129,120,248,0.92), rgba(0,200,255,0.82))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <IconButton
              component="a"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              sx={{
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.35)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.32)" },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
              sx={{
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.35)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.32)" },
              }}
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Fade-to-card-bg at image bottom for smooth content blend */}
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 56,
              background: isDark
                ? "linear-gradient(to top, rgba(18,18,31,0.85), transparent)"
                : "linear-gradient(to top, rgba(255,255,255,0.6), transparent)",
              pointerEvents: "none",
            }}
          />
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            p: 2.5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ mb: 0.75, fontSize: "0.95rem", lineHeight: 1.3 }}
          >
            {project.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary", lineHeight: 1.75, mb: 2, flexGrow: 1 }}
          >
            {project.description}
          </Typography>

          {/* Tech tags */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
            {project.tags.map((tag) => (
              <Box
                key={tag}
                component="span"
                sx={{
                  px: 1,
                  py: 0.3,
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  borderRadius: "4px",
                  backgroundColor: isDark
                    ? "rgba(0,200,255,0.08)"
                    : "rgba(0,119,184,0.07)",
                  color: "secondary.main",
                  border: "1px solid",
                  borderColor: isDark
                    ? "rgba(0,200,255,0.2)"
                    : "rgba(0,119,184,0.2)",
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>

          {/* Source link */}
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "text.secondary",
                fontSize: "0.82rem",
                fontWeight: 500,
                width: "fit-content",
                transition: "color 0.2s ease",
                "&:hover": { color: "primary.main" },
              }}
            >
              <GitHubIcon sx={{ fontSize: "1rem" }} />
              View source
            </Box>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    projectImage: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const titleRef = useScrollReveal();

  const sectionBg = isDark
    ? `radial-gradient(ellipse at 70% 60%, rgba(0,200,255,0.09) 0%, transparent 55%),
       radial-gradient(ellipse at 20% 20%, rgba(129,120,248,0.07) 0%, transparent 45%),
       #080810`
    : `linear-gradient(135deg, #f0f4ff 0%, #f8f7ff 100%)`;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 5, md: 8, lg: 12 },
        background: sectionBg,
        position: "relative",
        /* Don't clip — cards animate with translateY(-10px) on hover */
      }}
    >
      {/* Section header */}
      <Box ref={titleRef} className="reveal" sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="overline"
          sx={{ color: "secondary.main", letterSpacing: "0.15em", fontWeight: 700 }}
        >
          What I&apos;ve built
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, mt: 0.5, fontSize: { xs: "2rem", md: "2.6rem" } }}
        >
          Projects
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

      {/* Cards — sm=6 → 2 cols on tablet, md=3 → 4 cols on desktop */}
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {projects.map((project) => (
          <Grid key={project.name} item xs={12} sm={6} md={6} lg={3}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      {/* CTA */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 7 }}>
        <Button
          component="a"
          href="https://github.com/RishaV107"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          startIcon={<GitHubIcon />}
          sx={{
            borderColor: isDark
              ? "rgba(129,120,248,0.45)"
              : "rgba(108,95,255,0.45)",
            color: "primary.main",
            fontWeight: 600,
            px: 3.5,
            py: 1.2,
            "&:hover": {
              backgroundColor: isDark
                ? "rgba(129,120,248,0.1)"
                : "rgba(108,95,255,0.08)",
              borderColor: "primary.main",
            },
          }}
        >
          More on GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
