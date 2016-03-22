import React, { PropTypes } from 'react';

export function AddButton(props) {
  return (
    <button onClick={() => props.press(" + ")}> + </button>
  );
}

AddButton.propTypes = {
  press: PropTypes.func.isRequired,
};

export function SubtractButton(props) {
  return (
    <button onClick={() => props.press(" - ")}> - </button>
  );
}

SubtractButton.propTypes = {
  press: PropTypes.func.isRequired,
};

