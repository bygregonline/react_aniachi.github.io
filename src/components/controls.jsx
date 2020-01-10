import React, { Component } from "react";
import { connect } from "react-redux";

import {
  CHANGE_CHART_TYPE,
  CHANGE_USE_CREDITS,
  CHANGE_EXPORT_CHART,
  UPDATE_CREDITS_TEXT
} from "../store/actions";

class Controls extends Component {
  render() {
    return (
      <form>
        <div className="">
          <div className="form-inline row">
            <label className="col-4 text-xs-right">Chart type: </label>
            <select
              className="col-6 "
              onChange={this.props.onAChangeChartType}
              defaultValue="line"
            >
              <option value="bar">Bar</option>
              <option value="line">Lines</option>
              <option value="spline">Slines</option>
            </select>
          </div>
          <hr />
          <div className="form-inline row">
            <label className="col-4  ">Export chart: </label>
            <input
              className=" col-6"
              type="checkbox"
              checked={this.props.state.export_chart}
              onChange={this.props.onExportCharts}
            />
          </div>

          <hr />

          <div className="form-inline row">
            <label className="col-4 text-right">Use credits: </label>

            <input
              className="form-check-input"
              type="checkbox"
              checked={this.props.state.use_credits}
              onChange={this.props.onUseCredits}
            />
          </div>
          <hr />

          <div className="form-inline">
            <label className="col-4 text-right">Credits: </label>

            <input
              className="form-text col-6  "
              type="input"
              maxLength="15"
              disabled={this.props.state.credits_text_disabled}
              value={this.props.state.credits_text}
              onChange={this.props.onTextChange}
            />
          </div>
        </div>
        <hr />
      </form>
    );
  }
}

/*
REDUX
*/
const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAChangeChartType: e => {
      const action = { type: CHANGE_CHART_TYPE, payload: e.target.value };
      dispatch(action);
    },

    onUseCredits: a => {
      const action = { type: CHANGE_USE_CREDITS, payload: a.target.checked };

      dispatch(action);
    },

    onExportCharts: a => {
      const action = { type: CHANGE_EXPORT_CHART, payload: a.target.checked };
      dispatch(action);
    },

    onTextChange: a => {
      const action = { type: UPDATE_CREDITS_TEXT, payload: a.target.value };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
