import { Box, Container, Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const contacts = [
  {
    icon: <LocationOnIcon fontSize="large" />,
    title: "Address",
    text: "D. Y. Patil College of Engineering, Kasaba Bawada, Kolhapur, Maharashtra",
  },
  {
    icon: <PhoneIcon fontSize="large" />,
    title: "Phone",
    text: "+91 231 260 1234",
  },
  {
    icon: <EmailIcon fontSize="large" />,
    title: "Email",
    text: "cse@dypgroup.edu.in",
  },
];

function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 8, md: 11 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h3" component="h2">
            Contact Department
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {contacts.map((item) => (
            <Grid item xs={12} sm={4} key={item.title}>
              <Card elevation={2} sx={{ textAlign: "center", height: "100%", py: 3 }}>
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
