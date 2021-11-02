import React from "react";
import {store} from "../index";
import {TextComponent} from "./TextComponent";
import Settings from "./Settings";
export default class InfoCard extends React.Component{
  render() {
    let dark = store.getState().theme.dark;
    return <>
      <div className={`InfoCard ${dark ? "DarkInfo" : ""}`}>
        <div className={"HeaderFixed"}>
          <Settings/>
        </div>
        <div className={"InfoCardContent"}>
        <div className={'InfoCardText LightText Font--large'}>
          <h1><TextComponent text={"name"}/></h1>
          <div>Алая вспышка осветила силуэт зазубренного крыла.</div>
          <div>ABCD</div>
          <div>ABCD</div>
        </div>
        </div>
      </div>
    </>
  }
}