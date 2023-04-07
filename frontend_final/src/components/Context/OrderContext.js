import React, { createContext, useReducer } from "react";

const OrderContext = createContext();

function orderReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_ORDER":
      const item = state.find((item) => item.ID === action.payload.ID);
      if (item) {
        item.quantity++;
        return [...state];
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE_FROM_ORDER":
      return state.filter((item) => item.ID !== action.payload.ID);
    case "INCREMENT_QUANTITY":
      // Tăng số lượng sản phẩm trong giỏ hàng
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      // Giảm số lượng sản phẩm trong giỏ hàng
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          }
          return item;
        }),
      };
    case "EMPTY_ORDER":
      return [];
    default:
      return state;
  }
}

const OrderProvider = ({ children }) => {
  const [orderDetails, dispatch] = useReducer(orderReducer, []);

  const addToOrder = (item) => {
    dispatch({ type: "ADD_TO_ORDER", payload: item });
  };

  const removeFromOrder = (item) => {
    dispatch({ type: "REMOVE_FROM_ORDER", payload: item });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: item });
  };

  const updateQuantity = (item, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity } });
  };

  const emptyOrder = () => {
    dispatch({ type: "EMPTY_ORDER" });
  };

  let values = {
    orderDetails,
    addToOrder,
    removeFromOrder,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    emptyOrder,
  };

  return (
    <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
  );
};

export { OrderProvider, OrderContext };
