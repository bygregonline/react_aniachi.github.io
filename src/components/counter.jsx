import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DELETE_SIMPLE_ROW,
  INCREMENT_VALUE,
  CLEAN_ROW
} from "../store/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="btn-group">
          <span
            className={this.formatBadgeClasses()}
            onDoubleClick={this.handleClean}
          >
            {this.formatCount()}
          </span>
          <button
            onClick={this.props.onIncrementValue}
            className="btn btn btn-primary  btn-sm  m-2"
            disabled={this.format_increment()}
          >
            Increment <i className="fa fa-plus icons_1"></i>
          </button>
          <button
            /*onClick={() => this.props.onDelete(this.props.id)}*/
            onClick={this.props.onDeleteRow}
            className="btn btn btn-danger btn-sm m-2"
          >
            <i className="fa fa-minus"></i>
          </button>

          <button
            onClick={this.props.onCleanValue}
            className="btn  btn-sm m-2   btn-dark "
            disabled={this.format_clean()}
          >
            Clean <i className="fa fa-refresh icons_1"></i>
          </button>
        </div>
      </div>
    );
  }

  format_increment() {
    return this.props.value === 10;
  }

  format_clean() {
    return this.props.value === 0;
  }

  formatCount() {
    var tag = this.props.value === 0 ? "Zero" : this.props.value;
    return tag;
  }

  formatBadgeClasses() {
    let aux = "btn m-2 btn-sm btn-";

    aux += this.props.value === 0 ? "warning" : "primary";

    return aux;
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteRow: e => {
      const action = { type: DELETE_SIMPLE_ROW, payload: ownProps.id };
      dispatch(action);
    },

    onIncrementValue: a => {
      const action = { type: INCREMENT_VALUE, payload: ownProps.id };
      dispatch(action);
    },

    onCleanValue: a => {
      const action = { type: CLEAN_ROW, payload: ownProps.id };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
