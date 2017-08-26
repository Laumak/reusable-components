import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import CodeExample from "./CodeExample"

const StyledExample = styled.div`
  border: solid 1px #dbdbdb;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f4f6f9;
`

class Example extends React.Component {
  static propTypes = {
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired,
  }

  state = {
    showCode: false,
  }

  toggleCode = event => {
    event.preventDefault()

    this.setState(prevState => ({showCode: !prevState.showCode}))
  }

  render() {
    const { showCode } = this.state
    const { code, description, name } = this.props.example
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default
    return (
      <StyledExample>
        {description && <h4 style={{ marginTop: 0 }}>{description}</h4> }

        <ExampleComponent />

        <p style={{ marginBottom: 0 }}>
          <a href="" onClick={this.toggleCode}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </p>

        {showCode && <CodeExample>{code}</CodeExample>}
      </StyledExample>
    )
  }
}

export default Example
