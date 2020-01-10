import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./counters";
import Footer from "./footer";
import Chart from "./chart";
import Controls from "./controls";
import GMap from "./mapwrapper";
import GeneralInfo from "./information";
import store from "../store/";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <main className="">
            <div className="page-content">
              <Navbar />
              <div className="row">
                <div className="col-lg-6">
                  <Counters />
                </div>
                <div className="col-lg-6">
                  <GMap />
                </div>
              </div>
              <div className="row charts_rows_1">
                <div className="col-lg-3 controls_1">
                  <Controls />
                </div>
                <div className="col-lg-8 chart_1">
                  <Chart className="" />
                </div>
              </div>
              <hr />

              <GeneralInfo />
              <hr />
            </div>
          </main>

          <Footer />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
