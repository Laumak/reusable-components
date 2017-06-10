import React from "react"
import PropTypes from "prop-types"

const Navigation = ({components}) => {
  return (
    <aside className="menu">
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
    </aside>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired,
}

export default Navigation
