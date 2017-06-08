import React, { Component } from "react"
import TextInput from "ps-react/TextInput"

/** Required TextBox with error */
class ExampleError extends Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
       />
    )
  }
}

export default ExampleError