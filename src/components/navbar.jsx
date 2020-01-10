import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className=" mw-100 navbar navbar-expand text-white bg-dark navbar_1 sticky-top">
        <span className="">{this.props.state.nav_title}</span>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              disabled={true}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              disabled={true}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Navbar);
