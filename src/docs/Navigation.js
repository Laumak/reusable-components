import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SideMenu = styled.aside`
  float: left;
  width: 250px;
  padding-top: 20px;
`

const Navigation = ({components}) => {
  return (
    <SideMenu>
      <p className="menu-label">
        Components
      </p>

      <ul className="menu-list">
        {
          components.map(name =>
            <li key={name}>
              <a href={`#${name}`}>{name}</a>
            </li>
          )
        }
      </ul>
    </SideMenu>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired,
}

export default Navigation
