import React, { Component } from "react";
import Counter from "./counter";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { ADD_ROW, DELETE_ALL_ROWS, CLEAN_ALL_ROWS } from "../store/actions";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.state.titleName}</title>
          <link rel="icon" href={this.props.state.fav_icon} />
        </Helmet>

        <div className="w-50" ref="main_div">
          <div>
            {this.props.state.counters.map(c => (
              <Counter
                key={c.id}
                id={c.id}
                value={c.value}
                clean_enabled={c.clean_enabled}
              />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 40 }}>
            <hr />
            <button
              className="btn btn-outline-primary "
              onClick={this.props.onCleanAllRows}
              disabled={this.props.state.cleaned_all}
            >
              Clean all <i className="fa fa-refresh icons_1"></i>
            </button>
            {/* ADD ROW BUTTON */}
            <span
              className="d-inline-block"
              data-toggle="popover"
              data-content="Disabled popover"
            >
              <button
                onClick={this.props.onAddRow}
                className="btn btn-outline-primary btns_1"
                disabled={this.props.state.more_road_disabled}
              >
                {this.props.state.add_row_btn_txt}
                <i className="fa fa-plus icons_1"></i>
              </button>
            </span>
            <button
              onClick={this.props.onDeleteAllRows}
              className="btn btn-outline-primary "
            >
              Remove all <i className="fa fa-minus icons_1"></i>
            </button>
          </div>
        </div>
      </React.Fragment>
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
    onAddRow: () => {
      const action = { type: ADD_ROW };
      dispatch(action);
    },

    onDeleteAllRows: a => {
      const action = { type: DELETE_ALL_ROWS };
      dispatch(action);
    },

    onCleanAllRows: a => {
      const action = { type: CLEAN_ALL_ROWS };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
