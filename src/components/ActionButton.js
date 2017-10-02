import React from "react";
import PropTypes from "prop-types";

export class ActionButton extends React.Component {
  render() {
    let { buttonText, onButtonClick, incrementAmount, buttonType } = this.props;
    console.log("actionbutton props", this.props);
    return (
      <div>
        <button
          type="button"
          onClick={() => onButtonClick(incrementAmount * 1, buttonType)}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

ActionButton.propTypes = {
  incrementAmount: PropTypes.number
};
