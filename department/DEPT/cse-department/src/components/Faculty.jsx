import { Box, Container, Grid, Card, CardContent, Avatar, Typography } from "@mui/material";

const faculty = [
  {
    name: "Dr. R J Dhanal",
    designation: "Professor & Head",
    image: "/images/faculty/hod.avif",
  },
  {
    name: "Dr. Shoba Patil",
    designation: "Assistant Professor",
    image: "/images/faculty/faculty1.avif",
  },
  {
    name: "Prof. Shatakshi Kokate",
    designation: "Assistant Professor",
    image: "/images/faculty/Shatakshi-Kokate.avif",
  },
  {
    name: "Prof. K.T. Mane",
    designation: "Assistant Professor",
    image: "/images/faculty/ktm.avif",
  },
];

function Faculty() {
  return (
    <Box component="section" id="faculty" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
            OUR TEAM
          </Typography>
          <Typography variant="h3" component="h2">
            Faculty Members
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {faculty.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name + member.designation}>
              <Card elevation={2} sx={{ textAlign: "center", py: 4, height: "100%" }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 110, height: 110, mx: "auto", mb: 2 }}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.designation}
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

export default Faculty;
