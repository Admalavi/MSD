import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Akshata",
      course: "B.Tech CSE",
      marks: 85,
    };
  }

  increaseMarks = () => {
    this.setState({
      marks: this.state.marks + 5,
    });
  };

  render() {
    return (
      <div className="student-card">
        <h2>Student Information</h2>

        <p>
          <b>Name:</b> {this.state.name}
        </p>

        <p>
          <b>Course:</b> {this.state.course}
        </p>

        <p>
          <b>Marks:</b> {this.state.marks}
        </p>

        <button onClick={this.increaseMarks}>
          Increase Marks
        </button>
      </div>
    );
  }
}

export default Student;