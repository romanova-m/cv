import React from "react";
import logo from "../icons/github.svg";
import work from "../icons/briefcase.svg"
import mail from "../icons/email.svg"
import school from "../icons/school.svg"
import {store} from "../index";

class Button extends React.Component {
  render() {
    return <div><button className={"Btn"}><img className={store.getState().theme.dark && !this.props.noInvert? "BtnImg Inverted" : "BtnImg"} src={this.props.logo} alt="button"/></button></div>;
  }
}

export default class ButtonPanel extends React.Component {
  render() {
    return <div className="ButtonPanel">
      <Button logo={logo}/>
      <Button logo={work}/>
      <Button logo={mail}/>
      <Button logo={school}/>
    </div>;
  }
}
