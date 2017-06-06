import React from "react"
import PropTypes from 'prop-types'

/** Component description */
const HelloWorld = ({ message }) =>
  <div>Hello {message}</div>

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string.isRequired,
}

HelloWorld.defaultProps = {
  message: "World",
};

export default HelloWorld