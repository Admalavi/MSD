import { Box, Container, Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import HubIcon from "@mui/icons-material/Hub";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const expertise = [
  {
    icon: <CodeIcon />,
    title: "Programming",
    text: "C, C++, Java, Python and modern programming technologies.",
  },
  {
    icon: <PsychologyIcon />,
    title: "Artificial Intelligence",
    text: "Machine learning, deep learning and intelligent systems.",
  },
  {
    icon: <StorageIcon />,
    title: "Data Science",
    text: "Data analytics, databases and data-driven decision making.",
  },
  {
    icon: <HubIcon />,
    title: "Networking",
    text: "Computer networks, communication and cybersecurity.",
  },
  {
    icon: <SmartToyIcon />,
    title: "Robotics & IoT",
    text: "Connected systems, automation and embedded technologies.",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Research",
    text: "Innovation, research projects and emerging technologies.",
  },
];

function Expertise() {
  return (
    <Box component="section" id="academics" sx={{ py: { xs: 8, md: 11 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
            OUR STRENGTH
          </Typography>
          <Typography variant="h3" component="h2">
            Key Areas of Expertise
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {expertise.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Card
                elevation={1}
                sx={{
                  height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Avatar sx={{ bgcolor: "primary.main", mb: 2 }}>
                    {item.icon}
                  </Avatar>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
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

export default Expertise;
