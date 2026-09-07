import { Box, Container, Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const items = [
  {
    icon: <VisibilityIcon fontSize="large" />,
    title: "Vision",
    text: "To become a center of excellence in computer science education, research and innovation while creating globally competent professionals.",
  },
  {
    icon: <GpsFixedIcon fontSize="large" />,
    title: "Mission",
    text: "To provide quality technical education, promote research and innovation, encourage entrepreneurship and develop responsible technology professionals.",
  },
];

function VisionMission() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid item xs={12} md={6} key={item.title}>
              <Card elevation={2} sx={{ height: "100%", borderTop: "4px solid", borderColor: "primary.main" }}>
                <CardContent sx={{ p: 4 }}>
                  <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56, mb: 2 }}>
                    {item.icon}
                  </Avatar>
                  <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
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

export default VisionMission;
