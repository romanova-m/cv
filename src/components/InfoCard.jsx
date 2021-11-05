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
          <h1><TextComponent text={"name"}/>, 23</h1>
          <div><TextComponent text={"developer"}/></div>
          <div><TextComponent text={"university"}/></div>
          <div><TextComponent text={"job1"}/></div>
          <div><TextComponent text={"job1Detail"}/></div>
          <div><TextComponent text={"job2"}/></div>
          <div><TextComponent text={"job2Detail"}/></div>
          <div>ABCD</div>
        </div>
        </div>
      </div>
    </>
  }
}