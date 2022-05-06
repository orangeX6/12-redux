import { connect } from 'react-redux';
import { Component } from 'react';
// import { bindActionCreators } from 'redux';

import { INCREMENT, DECREMENT } from '../utils/constants';

import classes from './Counter.module.css';

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler() {}

  render() {
    console.log(this.props);

    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

// map redux state to props
const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       increment: () => ({ type: INCREMENT }),
//       decrement: () => ({ type: DECREMENT }),
//     },
//     dispatch
//   );
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
