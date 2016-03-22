import React, { PropTypes } from 'react';

export function AddButton(props) {
  return (
    <button onClick={() => props.press(' + ')}> + </button>
  );
}

AddButton.propTypes = {
  press: PropTypes.func.isRequired,
};

export function SubtractButton(props) {
  return (
    <button onClick={() => props.press(' - ')}> - </button>
  );
}

SubtractButton.propTypes = {
  press: PropTypes.func.isRequired,
};

export function MultiplyButton(props) {
  return (
    <button onClick={() => props.press(' x ')}> x </button>
  );
}

MultiplyButton.propTypes = {
  press: PropTypes.func.isRequired,
};

export function DivideButton(props) {
  return (
    <button onClick={() => props.press(' / ')}> / </button>
  );
}

DivideButton.propTypes = {
  press: PropTypes.func.isRequired,
};
