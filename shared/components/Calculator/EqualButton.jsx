import React, { PropTypes } from 'react';

function EqualButton(props) {
  return (
    <button onClick={() => props.press()}> = </button>
  );
}

EqualButton.propTypes = {
  press: PropTypes.func.isRequired,
};

export default EqualButton;