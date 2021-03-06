import * as appStateActions from '../actions'

export const initialState = {
  allLayersLoaded: false,
  baseLayer: appStateActions.BASE_LAYER_BOUNDARY_BLANK,
  baseLayerScope: appStateActions.SCOPE_CENSUS_TRACTS,
  buildingBaseLayer: appStateActions.BASE_LAYER_BUILDING_CATEGORIES,
  informationContentCode: '',
  landscapeOrientation: window.matchMedia('(orientation: landscape)').matches,
  legendOpen: false,
  legendScopeBoundaries: true,
  selectedLayer: null,
  sidebarScope: appStateActions.SCOPE_CENSUS_TRACTS,
  sidebarState: appStateActions.SIDEBAR_STATE_INACTIVE,
  sidebarView: appStateActions.SIDEBAR_VIEW_MAP_DETAILS_MENU
}

export const appStateReducer = (appState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case appStateActions.CHECK_ORIENTATION: {
      return { ...appState, landscapeOrientation: window.matchMedia('(orientation: landscape)').matches }
    }
    case appStateActions.ALL_LAYERS_LOADED: {
      return { ...appState, allLayersLoaded: true }
    }
    case appStateActions.ACTIVATE_SIDEBAR: {
      return { ...appState, sidebarState: appStateActions.SIDEBAR_STATE_ACTIVE }
    }
    case appStateActions.DEACTIVATE_SIDEBAR: {
      return { ...appState, sidebarState: appStateActions.SIDEBAR_STATE_INACTIVE }
    }
    case appStateActions.PREVIEW_SIDEBAR: {
      return { ...appState, sidebarState: appStateActions.SIDEBAR_STATE_PREVIEW }
    }
    case appStateActions.CHANGE_SIDEBAR_STATE: {
      return { ...appState, sidebarState: action.data }
    }
    case appStateActions.CHANGE_SIDEBAR_VIEW: {
      return { ...appState, sidebarView: action.data }
    }
    case appStateActions.CHANGE_SIDEBAR_SCOPE: {
      return { ...appState, sidebarScope: action.data }
    }
    case appStateActions.CHANGE_BASE_LAYER: {
      return { ...appState, baseLayer: action.data }
    }
    case appStateActions.CHANGE_BASE_LAYER_SCOPE: {
      return { ...appState, baseLayerScope: action.data }
    }
    case appStateActions.CHANGE_BUILDING_BASE_LAYER: {
      return { ...appState, buildingBaseLayer: action.data }
    }
    case appStateActions.CHANGE_INFORMATION_CONTENT_CODE: {
      return { ...appState, informationContentCode: action.data }
    }
    case appStateActions.SET_LEGEND_SCOPE_BOUNDARIES: {
      return { ...appState, legendScopeBoundaries: true }
    }
    case appStateActions.SET_LEGEND_SCOPE_BUILDINGS: {
      return { ...appState, legendScopeBoundaries: false }
    }
    case appStateActions.OPEN_LEGEND: {
      return { ...appState, legendOpen: true }
    }
    case appStateActions.CLOSE_LEGEND: {
      return { ...appState, legendOpen: false }
    }

    default:
      return appState
  }
}
