import { Box, Container, Grid, Card, CardMedia, Typography } from "@mui/material";

const labs = [
  { name: "Programming Laboratory", image: "/images/faculty/lab.jpg" },
  { name: "Database Laboratory", image: "/images/faculty/database.jpg" },
  { name: "Computer Networks Laboratory", image: "/images/faculty/networking.jpg" },
  { name: "Artificial Intelligence Laboratory", image: "/images/faculty/ailab.jpg" },
];

function Laboratories() {
  return (
    <Box component="section" id="labs" sx={{ py: { xs: 8, md: 11 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
            INFRASTRUCTURE
          </Typography>
          <Typography variant="h3" component="h2">
            Our Laboratories
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {labs.map((lab) => (
            <Grid item xs={12} sm={6} key={lab.name}>
              <Card sx={{ position: "relative", borderRadius: 2, overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={lab.image}
                  alt={lab.name}
                  sx={{ height: 260, objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    {lab.name}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Laboratories;
