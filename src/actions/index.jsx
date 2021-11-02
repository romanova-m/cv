export const CHANGE_THEME = 'CHANGE_THEME'
export const changeTheme = (val) => ({
  type: CHANGE_THEME,
  payload: {dark: val}
})

export const CHANGE_LANG = 'CHANGE_LANG'
export const changeLang = (val) => ({
  type: CHANGE_LANG,
  payload: {lang: val}
})