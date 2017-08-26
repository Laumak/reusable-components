import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`

const TH = styled.th`
  border: 1px solid #dbdbdb;
  padding: 0.5em 0.75em;
`

const TD = styled.td`
  font-family: 'Fira Sans', sans-serif;
  border: 1px solid #dbdbdb;
  padding: 0.5em 0.75em;
`

const Props = ({ props }) => {
  return (
    <Table style={{ marginBottom: 0 }}>
      <thead>
        <tr>
          <TH>Name</TH>
          <TH>Description</TH>
          <TH>Type</TH>
          <TH>Default</TH>
          <TH>Required</TH>
        </tr>
      </thead>

      <tbody>
      {
        Object.keys(props).map(key =>
          <tr key={key}>
            <TD>{key}</TD>
            <TD>{props[key].description}</TD>
            <TD>{props[key].type.name}</TD>
            <TD>{props[key].defaultValue && props[key].defaultValue.value}</TD>
            <TD style={{ textAlign: "center" }}>{props[key].required && "X"}</TD>
          </tr>
        )
      }
      </tbody>
    </Table>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired,
}

export default Props
