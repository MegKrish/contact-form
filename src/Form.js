import React from "react";
import { Grid, Cell } from "react-mdl";
import "./styles.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "First Name",
      lastName: "Last Name",
      email: "",
      passWord: "Password",
      date: "Month",
      day: "Day",
      year: "Year",
      check: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return function(e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSubmit(event) {
    var data = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      passWord: this.state.passWord,
      date: this.state.date,
      day: this.state.day,
      year: this.state.year,
      check: "True"
    };

    console.log(
      "First Name:" +
        data.name +
        ", Last Name: " +
        data.lastName +
        ", Email: " +
        data.email +
        ", Password: " +
        data.passWord +
        ", Date: " +
        data.date +
        ", Day: " +
        data.day +
        ", Year: " +
        data.year +
        ", Checked: " +
        data.check
    );
    alert("Thanks " + data.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Be the first in line!</h1>
        <h3>Sign up here and we'll notify you when we launch.</h3>
        <Grid>
          <Cell col={12} phone={4}>
            {/* First Name */}
            <div className={"select-wrapper"}>
              <div className={"label"}> First Name </div>
              <input
                className={"textfeildGroup"}
                type="text"
                value={this.state.name}
                onChange={this.handleChange("name")}
              />
            </div>
            {/* Last Name */}

            <div className={"select-wrapper"}>
              <div className={"label"}>Last Name</div>
              <input
                className={"textfeildGroup"}
                type="text"
                value={this.state.lastName}
                onChange={this.handleChange("lastName")}
              />
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            {/* Email */}
            <div className={"select-wrapper"}>
              <div className={"label"}>Email</div>
              <input
                className={"textfeild"}
                type="text"
                value={this.state.email}
                onChange={this.handleChange("email")}
              />
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            {/* Password */}
            <div className={"select-wrapper"}>
              <div className={"label"}>Password</div>
              <input
                className={"textfeild"}
                type="text"
                value={this.state.passWord}
                onChange={this.handleChange("passWord")}
              />
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={8}>
            <div className={"select-wrapper"}>
              <div className={"label"}> Birth date (optional) </div>
              {/* Month */}
              <select
                value={this.state.date}
                onChange={this.handleChange("date")}
              >
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>

              {/* Day */}
              <select
                value={this.state.day}
                onChange={this.handleChange("day")}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              {/* Year */}
              <select
                value={this.state.year}
                onChange={this.handleChange("year")}
              >
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
              </select>
            </div>
          </Cell>
        </Grid>
        <div className={"select-wrapper"}>
          <input
            type="checkbox"
            value="{this.state.check}"
            onChange={this.handleChange("check")}
          />
          <div className={"content"}>Accept the terms of use</div>
          <p>
            By checking the box. I agree to the
            <a href="/" target="_blank">
              Terms of Use.
            </a>
            For details on collection and use of your information, see our{" "}
            <a href="/" target="_blank">
              Privacy Policy.
            </a>
          </p>
        </div>
        <br />
        <input
          className={"submit"}
          type="submit"
          value="Sign up"
          placeholder="Sign Up"
        />
      </form>
    );
  }
}

export default Form;
