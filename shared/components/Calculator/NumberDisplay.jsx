import React, { PropTypes } from 'react';

function NumberDisplay(props) {
  return (
    <div>
    {props.shown}
    </div>
  );
}

NumberDisplay.propTypes = {
  shown: PropTypes.string.isRequired
};

export default NumberDisplay;