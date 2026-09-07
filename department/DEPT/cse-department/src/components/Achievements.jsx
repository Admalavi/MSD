import { Box, Container, Grid, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const achievements = [
  { icon: <SchoolIcon fontSize="large" />, number: "95%", text: "Academic Excellence" },
  { icon: <GroupsIcon fontSize="large" />, number: "1000+", text: "Alumni Network" },
  { icon: <AccountTreeIcon fontSize="large" />, number: "100+", text: "Student Projects" },
  { icon: <MilitaryTechIcon fontSize="large" />, number: "50+", text: "Awards & Achievements" },
];

function Achievements() {
  return (
    <Box
      component="section"
      id="achievements"
      sx={{ py: { xs: 8, md: 11 }, bgcolor: "primary.main", color: "#fff" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, color: "secondary.main" }}>
            ACHIEVEMENTS
          </Typography>
          <Typography variant="h3" component="h2">
            Department at a Glance
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {achievements.map((item) => (
            <Grid item xs={6} md={3} key={item.text} sx={{ textAlign: "center" }}>
              <Box sx={{ color: "secondary.main", mb: 1 }}>{item.icon}</Box>
              <Typography variant="h4" fontWeight={700}>
                {item.number}
              </Typography>
              <Typography variant="body2">{item.text}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Achievements;
