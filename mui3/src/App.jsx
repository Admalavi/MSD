import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Autocomplete,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Chip,
  Link,
  TextField,
  Typography
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {

  const courses = [
    "Java",
    "Python",
    "React",
    "C++",
    "JavaScript"
  ];

  return (
    <div style={{ padding: "30px" }}>

      <h1>Material UI Components</h1>

      {/* 1. Accordion */}
      <h2>1. Accordion</h2>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is React?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            React is a JavaScript library used to build user interfaces.
          </Typography>
        </AccordionDetails>
      </Accordion>


      {/* 2. Alert */}
      <h2>2. Alert</h2>

      <Alert severity="success">
        Operation Successful!
      </Alert>

      <br />

      <Alert severity="warning">
        Be careful!
      </Alert>


      {/* 3. Autocomplete */}
      <h2>3. Autocomplete</h2>

      <Autocomplete
        options={courses}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Course" />
        )}
      />


      {/* 4. Breadcrumbs */}
      <h2>4. Breadcrumbs</h2>

      <Breadcrumbs>
        <Link underline="hover" color="inherit">
          Home
        </Link>

        <Link underline="hover" color="inherit">
          Courses
        </Link>

        <Typography color="text.primary">
          Java
        </Typography>
      </Breadcrumbs>


      {/* 5. Button Group */}
      <h2>5. Button Group</h2>

      <ButtonGroup variant="contained">
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </ButtonGroup>


      {/* 6. Chip */}
      <h2>6. Chip</h2>

      <div>
        <Chip label="Java" sx={{ margin: "5px" }} />
        <Chip label="Python" sx={{ margin: "5px" }} />
        <Chip label="React" color="primary" sx={{ margin: "5px" }} />
      </div>

    </div>
  );
}

export default App;