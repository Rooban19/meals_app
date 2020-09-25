import { ADD_ORDER } from '../actions/order';
import Order from '../../models/order';

const initialState = {
  orders: [],
};

export default orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date(),
      );
      console.log('ORDERED REDUCER', newOrder);
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }

  return state;
};
