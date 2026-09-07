import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const specializations = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Software Engineering",
  "Cyber Security",
  "Cloud Computing",
  "Internet of Things",
  "Computer Networks",
  "Database Systems",
  "Web Technologies",
  "Mobile Application Development",
  "Computer Graphics",
];

function Specializations() {
  return (
    <Box component="section" id="specializations" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
            ACADEMICS
          </Typography>
          <Typography variant="h3" component="h2">
            Specializations
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {specializations.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  height: "100%",
                  borderLeft: "4px solid",
                  borderColor: "secondary.main",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                <Typography variant="h5" color="text.secondary" fontWeight={700}>
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  {item}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Specializations;
