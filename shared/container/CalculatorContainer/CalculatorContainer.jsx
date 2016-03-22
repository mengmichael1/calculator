import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import NumberButton from '../../components/Calculator/NumberButton';
import NumberDisplay from '../../components/Calculator/NumberDisplay';
import ClearButton from '../../components/Calculator/ClearButton';
import AddButton from '../../components/Calculator/AddButton';
import EqualButton from '../../components/Calculator/EqualButton';
import _ from 'lodash';

class CalculatorContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleNumberPress = this.handleNumberPress.bind(this);
    this.handleClearPress = this.handleClearPress.bind(this);
    this.handleAddPress = this.handleAddPress.bind(this);
    this.handleEqualPress = this.handleEqualPress.bind(this);
  }

  handleNumberPress(number) {
    this.props.dispatch(Actions.pressNumber(number));
  }

  handleClearPress(cleared) {
    this.props.dispatch(Actions.pressClear(cleared));
  }

  handleAddPress(addSymbol) {
    this.props.dispatch(Actions.pressAdd(addSymbol));
  }

  handleEqualPress() {
    this.props.dispatch(Actions.pressEqual());
  }

  render() {
    let buttons = _.range(10).map((_, i) => <NumberButton number={i} key={i} press={this.handleNumberPress}/>);
    
    return (
      <div>
        { buttons }
        <NumberDisplay shown={this.props.shown}/>
        <ClearButton press={this.handleClearPress}/>
        <AddButton press={this.handleAddPress}/>
        <EqualButton press={this.handleEqualPress}/>
      </div>
    );
  }

}

function mapStateToProps(store) {
  return {
    prev: (store.calculatorReducer.prev),
    curr: (store.calculatorReducer.curr),
    operator: (store.calculatorReducer.operator),
    shown: (store.calculatorReducer.shown),
  }
}
export default connect(mapStateToProps)(CalculatorContainer);
