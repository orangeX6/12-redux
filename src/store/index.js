import { createStore } from 'redux';

import { INCREMENT, DECREMENT, INCREASE, TOGGLE } from '../utils/constants';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case INCREASE:
      return { ...state, counter: state.counter + action.amount };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case TOGGLE:
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// useSelector will automatically do this for us
// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'INCREMENT', payload: 69 });
