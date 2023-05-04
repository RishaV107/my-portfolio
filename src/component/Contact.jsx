import { Container, Typography, Link } from "@mui/material";

const Contact = () => {
  const email = "example@example.com";
  const quote =
    "“Code is like humor. When you have to explain it, it's bad.” - Cory House";

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <Link href={`mailto:${email}`} color="inherit">
          {email}
        </Link>
      </Typography>
      <Typography variant="body2" component="div" align="center">
        {quote}
      </Typography>
    </Container>
  );
};

export default Contact;
