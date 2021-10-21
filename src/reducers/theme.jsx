import {CHANGE_THEME} from "../actions";

const initialState = {dark:true}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, ...action.payload}
    default: return state;
  }
}

export default themeReducer;