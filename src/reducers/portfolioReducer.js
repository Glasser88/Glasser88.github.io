import { Map } from "immutable";

const ACTIONS = {
  ["GET_STUFF"]: function(state, action) {
    const { user } = action.payload;
    return state.merge({
      user,
    });
  },
}

export default function portfolioReducer(state = new Map(), action) {
  return ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state;
}
