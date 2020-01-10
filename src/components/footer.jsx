import React, { Component } from "react";
import { connect } from "react-redux";
import aniachilogo2 from "../assets/img/aniachi_logo2.png";

class Footer extends Component {
  render() {
    return (
      <footer className="fixed-bottom py-1 bg-dark text-white-50">
        <div className="container text-center">
          <img src={aniachilogo2} className="logo_1" alt="" />
          <small>Copyright &copy; {this.props.state.someAction}</small>
        </div>
      </footer>
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

export default connect(mapStateToProps)(Footer);
