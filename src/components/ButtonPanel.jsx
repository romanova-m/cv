import React from "react";
import logo from "../icons/github.svg";
import work from "../icons/briefcase.svg"
import mail from "../icons/email.svg"
import school from "../icons/school.svg"
import night from "../icons/dark_mode.svg"
import {changeTheme} from "../actions";
import {connect} from "react-redux";
import {store} from "../index";
import {TextComponent} from "./TextComponent";

class Button extends React.Component {
  render() {
    return <div><button className={"Btn"}><img className={store.getState().theme.dark && !this.props.noInvert? "BtnImg Inverted" : "BtnImg"} src={this.props.logo} alt="button"/></button></div>;
  }
}

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state= {...this.props};
  }
  click = (dark) => {
    this.props.changeComponentTheme(!dark)
  };
  render() {
    let dark = store.getState().theme.dark;
    return <div className="ButtonPanel">
      <input type="checkbox" className={"toggle"} onClick={() => this.click(dark)} value={dark} defaultChecked={store.getState().theme.dark}/>
      <label><TextComponent text={"nightMode"}/></label>
      <Button logo={logo}/>
      <Button logo={work}/>
      <Button logo={mail}/>
      <Button logo={school}/>
    </div>;
  }
}

export default connect(
  state => ({
    dark: state.dark
  }),
  dispatch => ({
    changeComponentTheme(val) {
      dispatch(changeTheme(val))
    }
  })
)(ButtonPanel)
