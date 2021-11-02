import {CHANGE_LANG, CHANGE_THEME} from "../actions";

const initialState = {dark:true, lang: "en"}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, ...action.payload}
    case CHANGE_LANG:
      return {...state, ...action.payload}
    default: return state;
  }
}

export default themeReducer;