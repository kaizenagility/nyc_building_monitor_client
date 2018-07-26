import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_STATE_INACTIVE,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../Store/AppState/actions'

import ControlRow from '../SharedComponents/ControlRow'
import ControlBackButton from '../SharedComponents/ControlBackButton'
import ControlNextButton from '../SharedComponents/ControlNextButton'
import ControlToggleButton from '../SharedComponents/ControlToggleButton'
import ControlHideButton from '../SharedComponents/ControlHideButton'
import ControlExpandButton from '../SharedComponents/ControlExpandButton'
import ControlPreviewButton from '../SharedComponents/ControlPreviewButton'
import './style.scss'

const getOrientationRow = props => {
  return props.appState.landscapeOrientation ? (
    <ControlRow>
      <ControlBackButton appState={props.appState} className="control-row-child" />
      {props.appState.landscapeOrientation && <ControlToggleButton appState={props.appState} />}
      <ControlNextButton
        appState={props.appState}
        className="control-row-child"
        selectedObjects={props.selectedObjects}
      />
    </ControlRow>
  ) : (
    <ControlRow>
      <ControlBackButton appState={props.appState} className="control-row-child" />

      {props.appState.sidebarState === SIDEBAR_STATE_PREVIEW && (
        <ControlHideButton className="control-row-child" sidebarState={props.appState.sidebarState} />
      )}
      {props.appState.sidebarState === SIDEBAR_STATE_ACTIVE && (
        <ControlPreviewButton className="control-row-child" sidebarState={props.appState.sidebarState} />
      )}
      <ControlExpandButton className="control-row-child" sidebarState={props.appState.sidebarState} />

      <ControlNextButton
        appState={props.appState}
        className="control-row-child"
        selectedObjects={props.selectedObjects}
      />
    </ControlRow>
  )
}
const TopBar = props => {
  return <div className="top-bar">{getOrientationRow(props)}</div>
}

TopBar.propTypes = {
  appState: PropTypes.object,
  dispatch: PropTypes.func,
  selectedObjects: PropTypes.object
}

export default TopBar