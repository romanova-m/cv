import React from "react";
import logo from "../icons/github.svg";
import work from "../icons/briefcase.svg"
import mail from "../icons/email.svg"
import school from "../icons/school.svg"
import {changeTheme} from "../actions";
import {connect} from "react-redux";
import {store} from "../index";

class Button extends React.Component {
  render() {
    return <div><button className="Btn"><img className={store.getState().theme.dark && !this.props.noInvert? "BtnImg Inverted" : "BtnImg"} src={this.props.logo} alt="button"/></button></div>;
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
      <label className="switch">
        <input type="checkbox" onClick={() => this.click(dark)} value={dark} defaultChecked={store.getState().theme.dark}/>
        <span className="slider round"></span>
      </label>
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
