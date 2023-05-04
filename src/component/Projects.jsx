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

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/project1",
      projectImage:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/project2",
      projectImage:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/project3",
      projectImage:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/project3",
      projectImage:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/project3",
      projectImage:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "Project 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/project3",
      projectImage:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
        // backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        py: 8,
      }}
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
          <Typography variant="h4" component="h2" gutterBottom>
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
              xl={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card elevation={15}>
                <CardMedia sx={{ height: 140 }} image={project.projectImage} />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {project.name}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {project.description}
                  </Typography>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
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
