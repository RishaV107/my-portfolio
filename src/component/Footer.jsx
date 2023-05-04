import { Container, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const linkedInLink = "https://www.linkedin.com/in/rishav-singh-2b0277158/";
  const githubLink = "https://github.com/RishaV107";

  const date = new Date();

  return (
    <footer style={{ backgroundColor: "#2D2E32", padding: "24px 0" }}>
      <Container>
        <Typography variant="body2" component="div" align="center">
          <Link
            href={linkedInLink}
            target="_blank"
            rel="noopener noreferrer"
            color="#FFFFFF"
          >
            <LinkedInIcon fontSize="large" />
          </Link>{" "}
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            color="#FFFFFF"
          >
            <GitHubIcon fontSize="large" />
          </Link>
        </Typography>
        <Typography
          variant="body2"
          component="div"
          align="center"
          color="#FFFFFF"
          sx={{ fontSize: "17px" }}
        >
          &copy; {date.getFullYear()}. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
