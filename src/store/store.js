import { createStore } from "redux";

const initState = {
  mapDraw: null,
};

function reducer(state = initState, action) {
  if (action.type === "MAP_DRAW") {
    return { ...state, mapDraw: action.mapDraw };
  }

  return state;
}

export default createStore(reducer);
