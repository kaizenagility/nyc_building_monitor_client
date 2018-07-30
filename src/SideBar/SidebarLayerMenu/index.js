import React from 'react'
import PropTypes from 'prop-types'
import SwitchLayerButton from '../SharedComponents/SwitchLayerButton'
import ButtonRow from '../../SharedComponents/ButtonRow'
import IconProfile from '../SharedComponents/IconProfile'
import IconHeader from '../SharedComponents/IconHeader'

import SidebarBoundaryScopeButtons from '../SidebarBoundaryScopeButtons'
import SidebarBoundaryDetailButtons from '../SidebarBoundaryDetailButtons'
import SidebarBuildingDetailButtons from '../SidebarBuildingDetailButtons'

import {
  changeBaseLayer,
  switchScopeWithFetch,
  changeBaseLayerScope,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  BASE_LAYER_BOUNDARY_BLANK,
  BASE_LAYER_MEDIAN_INCOME,
  BASE_LAYER_MEDIAN_RENT,
  BASE_LAYER_MEDIAN_RENT_CHANGE,
  BASE_LAYER_WHITE_POPULATION,
  BASE_LAYER_OPEN_311
} from '../../Store/AppState/actions'

import { BuildingExploreIcon, RegionIcon, BoundaryLayersIcon } from '../../SharedStyles/icons'

export default class SidebarLayerMenu extends React.Component {
  constructor(props) {
    super(props)

    this.switchLayer = this.switchLayer.bind(this)
    this.switchScopeWithFetch = this.switchScopeWithFetch.bind(this)
  }

  switchScopeWithFetch(scope) {
    this.props.dispatch(changeBaseLayerScope(scope))
    this.props.dispatch(switchScopeWithFetch(scope))
  }

  switchLayer(layer) {
    this.props.dispatch(changeBaseLayer(layer))
  }

  render() {
    return (
      <div
        className={`sidebar-layer-menu ${
          this.props.landscapeOrientation ? 'content-box headerless-scroll-container' : ''
        }`}
      >
        <div className="menu-section">
          {this.props.landscapeOrientation && <IconHeader icon={RegionIcon}>Regions</IconHeader>}
          <SidebarBoundaryScopeButtons dispatch={this.props.dispatch} />
        </div>
        <div className="menu-section">
          {this.props.landscapeOrientation && <IconHeader icon={BoundaryLayersIcon}>Region Details</IconHeader>}
          <SidebarBoundaryDetailButtons dispatch={this.props.dispatch} />
        </div>
        {this.props.buildingsPresent && (
          <div className="menu-section">
            {this.props.landscapeOrientation && <IconHeader icon={BuildingExploreIcon}>Building Details</IconHeader>}
            <SidebarBuildingDetailButtons dispatch={this.props.dispatch} />
          </div>
        )}
      </div>
    )
  }
}

SidebarLayerMenu.propTypes = {
  dispatch: PropTypes.func,
  buildingsPresent: PropTypes.bool,
  landscapeOrientation: PropTypes.bool
}
