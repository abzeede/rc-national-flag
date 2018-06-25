import React from 'react'
import { string, bool } from 'prop-types'

const Flag = ({ code, square, ...props }) => (
  <img
    src={`https://lipis.github.io/flag-icon-css/flags/${square ? '1x1' : '4x3'}/${code.toLowerCase()}.svg`}
    alt={code}
    {...props}
  />
)

Flag.propTypes = {
  code: string.isRequired,
  square: bool
}

Flag.defaultProps = {
  square: false 
}

export default Flag
