import React from "react"
import PropTypes from "prop-types"

import CodeExample from "./CodeExample"

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
      <div className="example">
        {description && <h4>{description}</h4> }

        <ExampleComponent />

        <p>
          <a href="" onClick={this.toggleCode}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </p>

        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    )
  }
}

export default Example
