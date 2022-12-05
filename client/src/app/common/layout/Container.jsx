import React from 'react'
import PropTypes from 'prop-types'

const Container = (props) => {
  const { sample } = props
  return <div>Container</div>
}
Container.propTypes = {
  sample: PropTypes.string.isRequired,
}
export default Container
