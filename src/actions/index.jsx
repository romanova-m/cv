export const CHANGE_THEME = 'CHANGE_THEME'
export const changeTheme = (val) => ({
  type: CHANGE_THEME,
  payload: {dark: val}
})