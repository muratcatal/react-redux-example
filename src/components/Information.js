import React, { Component } from "react";
export class Information extends Component {
  render() {
    console.log("information component:", this.props);

    let { currentCounter } = this.props;
    return <h3>Current value: {currentCounter}</h3>;
  }
}
