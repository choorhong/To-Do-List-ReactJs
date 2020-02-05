import React, { Component } from "react";
import "./InputArea.css";
import { Form, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

let itemID = 4;
class InputArea extends Component {
  state = {
    text: ""
  };

  inputHandler = event => {
    // event.persist();
    this.setState({
      text: event.target.value
    });
  };

  submitHandler = event => {
    // event.persist();
    event.preventDefault();
    this.props.additem({
      id: itemID,
      task: this.state.text,
      done: false
    });
    itemID++;
    this.setState({ text: "" });
  };

  render() {
    let { text } = this.state;
    return (
      <div className="inputArea">
        <Form onSubmit={this.submitHandler}>
          <InputGroup size="lg">
            <Input onChange={this.inputHandler} value={text} />
            <InputGroupAddon addonType="append">
              <Button
                type="submit"
                color="primary"
                disabled={!this.state.text.length}
              >
                Submit
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default InputArea;
