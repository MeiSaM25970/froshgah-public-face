import React, { Component, Fragment } from "react";
import { ScrollTop } from "../component/scrollTop";
import { Tracking } from "../component/Tracking";

export class TrackingPage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Tracking {...this.props} />
        <ScrollTop />
      </Fragment>
    );
  }
}
