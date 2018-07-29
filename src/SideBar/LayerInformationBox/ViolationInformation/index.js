import React from 'react'
import PropTypes from 'prop-types'

import IconRow from '../../SharedComponents/IconRow'
import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import ButtonRow from '../../../SharedComponents/ButtonRow'
import { RightArrow } from '../../../SharedStyles/icons'

import { convertDepartmentToName, convertTimestampToData, fillEmptyString } from '../utils/informationUtils.js'

import { prevSelectedViolation, nextSelectedViolation } from '../../../Store/Violations/actions'

import { ViolationIcon } from '../../../SharedStyles/icons'

import '../SharedStyles/style.scss'

const ViolationInformation = props => {
  return (
    <div className="violation-information">
      <ButtonRow className="split">
        <DispatchActionButton
          action={prevSelectedViolation}
          className="control-icon-container round button-border-left"
        >
          <RightArrow className="svg-flip" />
        </DispatchActionButton>
        {props.selectedObject.index + 1} / {props.featureLength}
        <DispatchActionButton
          action={nextSelectedViolation}
          className="control-icon-container round button-border-right"
        >
          <RightArrow />
        </DispatchActionButton>
      </ButtonRow>
      <div className="info-section">
        <IconRow className="card" icon={ViolationIcon}>
          <div>{convertTimestampToData(props.selectedObject.date)}</div>
        </IconRow>
        <div className="row-box text-well">
          <div>{fillEmptyString(props.selectedObject.description)}</div>
        </div>
        <IconRow className="card" icon={ViolationIcon}>
          Issued by the <span>{convertDepartmentToName(props.selectedObject.source)}</span>
        </IconRow>
        {!!props.selectedObject.penalty && (
          <IconRow className="card" icon={ViolationIcon}>
            A penalty of <span>{props.selectedObject.penalty}</span> was imposed.
          </IconRow>
        )}
        <IconRow className="card" icon={ViolationIcon}>
          Code: <span>{props.selectedObject.code}</span>
          <div>Read more about this violation type.</div>
        </IconRow>
        <div className="info-title">Status</div>
        <IconRow className="card" icon={ViolationIcon}>
          The status is: {props.selectedObject.status}
        </IconRow>
        {!!props.selectedObject.statusDescription && (
          <div className="row-box text-well">
            <div>{fillEmptyString(props.selectedObject.statusDescription)}</div>
          </div>
        )}
      </div>
    </div>
  )
}

ViolationInformation.propTypes = {
  dispatch: PropTypes.func,
  selectedObject: PropTypes.object
}

export default ViolationInformation
