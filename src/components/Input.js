import React, { Component } from "react";

export class Input extends Component {
  render() {
    let { onInputChanged } = this.props;
    let input;

    console.log("input component:", this.props);

    return (
      <div>
        <input
          type="text"
          name="number"
          id="number"
          ref={node => {
            input = node;
          }}
          onChange={() => onInputChanged(input.value)}
        />
      </div>
    );
  }
}
