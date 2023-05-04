import {
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
  IconButton,
  Box,
  CardMedia,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import BubbleAnimationImage from "../assets/images/BubbleAnimation.png";
import GitHubFinderImage from "../assets/images/GitHubFinder.png";
import BikeServicePortalImage from "../assets/images/BikeServicePortal.png";

const Projects = () => {
  const projects = [
    {
      name: "Bike Service Portal",
      description:
        "This is a web application built using React, designed to provide a platform for bike owners to schedule and manage their bike service appointments conveniently",
      githubLink: "https://github.com/RishaV107/Bike-Service-Portal",
      projectImage: BikeServicePortalImage,
    },
    {
      name: "Synapsis",
      description:
        "It is basically a website through which You can get information about various types of surgeries and get the contact no of the specialized doctor in that surgery. ",
      githubLink: "https://github.com/RishaV107/Synapsis",
      projectImage:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "GitHub-Finder",
      description:
        "This is the simple react app implemented with the GitHub API to fetch the details of the users.",
      githubLink: "https://github.com/RishaV107/GitHub-Finder",
      projectImage: GitHubFinderImage,
    },
    {
      name: "Bubble Animate",
      description:
        "A simple canvas based JavaScript app to animate the bubble on to the screen",
      githubLink: "https://github.com/RishaV107/BubbleAnimate",
      projectImage: BubbleAnimationImage,
    },
  ];

  return (
    <Box
      sx={{
        // backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
        backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        py: 8,
      }}
      pl={2}
      pr={2}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          xl={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            fontSize="3em"
            fontWeight="bold"
          >
            Projects
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          xl={12}
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {projects.map((project, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sm={6}
              md={4}
              xl={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card elevation={15}>
                <CardMedia
                  sx={{ height: "8em" }}
                  image={project.projectImage}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      overflow: "scroll",
                    }}
                    maxHeight={140}
                  >
                    {project.description}
                  </Typography>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <IconButton>
                      <GitHubIcon />
                    </IconButton>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
