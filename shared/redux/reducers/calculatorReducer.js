import * as ActionTypes from '../constants/constants';

const initialState = {
  prev: '',
  curr: '',
  operator: '',
  shown: '',
};

let updatedPrev;
let updatedCurr;

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PRESS_NUMBER :
      if ((state.operator).length === 0) {
        updatedPrev = state.prev + action.number;

        return {
          prev: updatedPrev,
          curr: state.curr,
          operator: state.operator,
          shown: updatedPrev,
        };
      } else {
        updatedCurr = state.curr + action.number;

        return {
          prev: state.prev,
          curr: updatedCurr,
          operator: state.operator,
          shown: updatedCurr,
        };
      }

    case ActionTypes.PRESS_CLEAR :
      return {
        prev: '',
        curr: '',
        operator: '',
        shown: '',
      };

    case ActionTypes.PRESS_OPERATOR :
      return {
        prev: state.shown,
        curr: state.curr,
        operator: action.symbol,
        shown: state.shown,
      };

    case ActionTypes.PRESS_EQUAL :
      if (state.operator.localeCompare(' + ') === 0) {
        updatedPrev = parseFloat(state.prev, 10) + parseFloat(state.curr, 10);

        return {
          prev: '',
          curr: '',
          operator: '',
          shown: updatedPrev.toString(),
        };
      } else if (state.operator.localeCompare(' - ') === 0) {
        updatedPrev = parseFloat(state.prev, 10) - parseFloat(state.curr, 10);

        return {
          prev: '',
          curr: '',
          operator: '',
          shown: updatedPrev.toString(),
        };
      } else if (state.operator.localeCompare(' x ') === 0) {
        updatedPrev = parseFloat(state.prev, 10) * parseFloat(state.curr, 10);

        return {
          prev: '',
          curr: '',
          operator: '',
          shown: updatedPrev.toString(),
        };
      } else if (state.operator.localeCompare(' / ') === 0) {
        updatedPrev = parseFloat(state.prev, 10) / parseFloat(state.curr, 10);

        return {
          prev: '',
          curr: '',
          operator: '',
          shown: updatedPrev.toString(),
        };
      } 

    default:
      return state;
  }
};

export default calculatorReducer;
