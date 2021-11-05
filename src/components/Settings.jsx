import React from "react";

import i18n from "../locales/i18n";
import {TextComponent} from "./TextComponent";
import {connect} from "react-redux";
import {changeLang, changeTheme} from "../actions";
import * as PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

class Settings extends React.Component{
  changeMode = (dark) => {
    this.props.changeComponentTheme(!dark)
  };
  changeLang = (isEng) => {
    let val = isEng? "ru": "en";
    i18n.changeLanguage(val);
    this.props.changeComponentLang(val)
  };
  render() {
    let dark = this.props.dark;
    let lang = (this.props.lang === "en");
    return <>
      <Toggle defaultChecked={dark}/>
        <input type="checkbox" className={"toggle"} onClick={() => this.changeMode(dark)} defaultChecked={dark}/>
        <label><TextComponent text={"nightMode"}/></label>
        <input type="checkbox" className={"toggle"} onClick={() => this.changeLang(lang)} value={lang} defaultChecked={lang}/>
        <label><TextComponent text={"RU/EN"}/></label>
    </>
  }
}

export default connect(
  state => ({
    dark: state.theme.dark,
    lang: state.theme.lang
  }),
  dispatch => ({
    changeComponentTheme(val) {
      dispatch(changeTheme(val))
    },
    changeComponentLang(val) {
      dispatch(changeLang(val))
    }
  })
)(Settings)

export const Toggle = (props) => {
  return (<>
    <div className="ToggleBtn">
    <input type="checkbox" defaultChecked={props.defaultChecked}/>
    <label>123</label>
    </div>
  </>);
};