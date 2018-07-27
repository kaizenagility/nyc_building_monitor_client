import React from 'react'
import PropTypes from 'prop-types'

const SwitchLayerButton = props => {
  const switchLayer = () => {
    props.action(props.layer)
  }
  return (
    <div className={`button layer-menu-button ${props.className}`} onClick={switchLayer}>
      {props.children}
    </div>
  )
}

SwitchLayerButton.propTypes = {
  action: PropTypes.func,
  buttonText: PropTypes.string,
  layer: PropTypes.string
}

export default SwitchLayerButton
