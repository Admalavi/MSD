import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const stats = [
  { value: "15+", label: "Faculty" },
  { value: "500+", label: "Students" },
  { value: "8+", label: "Labs" },
  { value: "20+", label: "Years" },
];

function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
            ABOUT US
          </Typography>
          <Typography variant="h3" component="h2">
            Computer Science & Engineering
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/cse-lab.jpg"
              alt="CSE Laboratory"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
              About the Department
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
              The Department of Computer Science and Engineering provides
              students with a strong foundation in computer science,
              programming, software development and emerging technologies.
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              The department focuses on developing technical skills,
              problem-solving abilities, research aptitude and professional
              competencies required for modern technology industries.
            </Typography>

            <Grid container spacing={2}>
              {stats.map((stat) => (
                <Grid item xs={6} sm={3} key={stat.label}>
                  <Paper
                    elevation={0}
                    sx={{
                      textAlign: "center",
                      py: 2,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h5" color="primary" fontWeight={700}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
