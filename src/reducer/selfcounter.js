const initialState = 0;
const selfCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELF_ADD":
      return action.payload + 1;
    case "SELF_REMOVE":
      if (state == 0) {
        return state;
      } else {
        return action.payload - 1;
      }

    default:
      return state;
  }
};

export default selfCountReducer;
