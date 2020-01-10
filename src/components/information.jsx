import React, { Component } from "react";

import {
  isBrowser,
  isMobile,
  isTablet,
  isConsole,
  osVersion,
  osName,
  getUA,
  browserName,
  engineName,
  browserVersion,
  mobileVendor,
  mobileModel
} from "react-device-detect";

class GeneralInfo extends Component {
  render() {
    return (
      <div className="table_1">
        <h3>Browser properties</h3>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>is Browser</td>
              <td>{c(isBrowser)}</td>
            </tr>
            <tr>
              <td>is Mobile</td>
              <td>{c(isMobile)}</td>
            </tr>
            <tr>
              <td>is Tablet</td>
              <td>{c(isTablet)}</td>
            </tr>
            <tr>
              <td>is Console</td>
              <td>{c(isConsole)}</td>
            </tr>
            <tr>
              <td>User agent</td>
              <td>{getUA}</td>
            </tr>
            <tr>
              <td>os Version</td>
              <td>{osVersion}</td>
            </tr>
            <tr>
              <td>os Name</td>
              <td>{osName}</td>
            </tr>
            <tr>
              <td>Browser name</td>
              <td>{browserName}</td>
            </tr>
            <tr>
              <td>Engine name</td>
              <td>{engineName}</td>
            </tr>
            <tr>
              <td>Browser Version</td>
              <td>{browserVersion}</td>
            </tr>
            <tr>
              <td>Mobile Vendor</td>
              <td>{mobileVendor}</td>
            </tr>
            <tr>
              <td>Mobile Model</td>
              <td>{mobileModel}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const c = d => {
  return d ? "True" : "False";
};

export default GeneralInfo;
