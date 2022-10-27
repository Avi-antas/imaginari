const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return action.payload + 1;
    case "REMOVE_TO_CART":
      if (state == 0) {
        return state;
      } else {
        return action.payload - 1;
      }

    default:
      return state;
  }
};

export default counterReducer;
