import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Props from "./Props"
import Example from "./Example"

const StyledPage = styled.div`
  min-height: 100vh;
  margin-left: 250px;
  padding: 20px;
  border-left: 1px solid #dbdbdb;
`

const ComponentPage = ({ component }) => {
  const { name, description, props, examples } = component

  return (
    <StyledPage>
      <h2>{name}</h2>
      <p>{description}</p>

      <hr/>

      <h3>Example{examples.length > 1 && "s"}</h3>
      {
        examples.length > 0 ?
        examples.map( example => <Example key={example.name} example={example} componentName={name} /> ) :
        "No examples exist."
      }

      <h3>Props</h3>
      {
        props
          ? <Props props={props} />
          : "This component accepts no props."
      }
    </StyledPage>
  )
}

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired,
}

export default ComponentPage
