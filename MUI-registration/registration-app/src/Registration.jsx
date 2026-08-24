import { useState } from "react";

import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !gender || !course || !agree) {
      alert("Please fill all fields");
      return;
    }

    alert("Registration Successful!");
  };

  return (
    <div className="registration-box">

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel>Gender</FormLabel>

        <RadioGroup
          row
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel
            value="Male"
            control={<Radio />}
            label="Male"
          />

          <FormControlLabel
            value="Female"
            control={<Radio />}
            label="Female"
          />
        </RadioGroup>

        <FormControl fullWidth margin="normal">
          <InputLabel>Course</InputLabel>

          <Select
            value={course}
            label="Course"
            onChange={(e) => setCourse(e.target.value)}
          >
            <MenuItem value="CSE">
              Computer Science
            </MenuItem>

            <MenuItem value="IT">
              Information Technology
            </MenuItem>

            <MenuItem value="ECE">
              Electronics
            </MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
          }
          label="I agree to the terms and conditions"
        />

        <br />

        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Register
        </Button>

      </form>
    </div>
  );
}

export default Registration;