import React, { PropTypes } from 'react';

function NumberDisplay(props) {
  return (
    <div>
      {props.shown}
    </div>

    // <body>
    // <div id="num-display">
    //   {props.shown}
    // </div>
    // <script>
    //   document.getElementById("num-display").style.color = "blue";
    // </script>
    // </body>
  );
}

NumberDisplay.propTypes = {
  shown: PropTypes.string.isRequired
};

export default NumberDisplay;