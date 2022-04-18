import React, { Component } from "react";
import Header from "./Header";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

import "./Home.css";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Header />
        <div class="home-container">
          <div>
            <h1>Vacation Planner</h1>
            <p>Welcome to the Vacation planner!</p>
            <p>Filler Text Here</p>
          </div>
          <div className="group-form-container">
            <h1>join or create a group</h1>
            <Form>
              <FormGroup controlId="grouptitle" size="lg">
                <FormLabel>Group title:</FormLabel>

                <FormControl
                  autoFocus
                  type="text"
                  // name="userid"
                  // value={username}
                  placeholder="Group title"
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>

              <FormGroup controlId="groupstatus" size="lg">
                <FormLabel>Group status:</FormLabel>

                <FormControl
                  autoFocus
                  type="text"
                  // name="userid"
                  // value={username}
                  placeholder="Group status"
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>

              <FormGroup controlId="profile" size="lg">
                <FormLabel>Profile:</FormLabel>

                <FormControl
                  autoFocus
                  type="text"
                  // name="userid"
                  // value={username}
                  placeholder="profile"
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
