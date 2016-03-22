import React, { PropTypes } from 'react';

function AddButton(props) {
  return (
    <button onClick={() => props.press(" + ")}> + </button>
  );
}

AddButton.propTypes = {
  press: PropTypes.func.isRequired,
};

export default AddButton;