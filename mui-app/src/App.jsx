import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import MyButton from "./Button";
import MyCard from "./Card";

function App() {
  return (
    <div>
      {/* App Bar */}

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My MUI App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}

      <Container className="main-container">
        <Typography variant="h2">
          Welcome to React MUI
        </Typography>

        <Typography variant="body1">
          This is a sample example using UI.
        </Typography>

        <br />

        {/* Button */}

        <MyButton />

        <br />
        <br />

        {/* Text Field */}

        <TextField
          label="Enter your Name"
          variant="outlined"
        />

        <br />
        <br />

        {/* Checkbox */}

        <FormControlLabel
          control={<Checkbox />}
          label="Accept terms and conditions"
        />

        <br />
        <br />

        {/* Card */}
        <div className="card-container">
        <MyCard />
        </div>
      </Container>
    </div>
  );
}

export default App;