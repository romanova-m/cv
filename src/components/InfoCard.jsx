import React from "react";
import {store} from "../index";
import {TextComponent} from "./TextComponent";
export default class InfoCard extends React.Component{
  render() {
    let dark = store.getState().theme.dark? "DarkInfo" : ""
    return <>
      <div className={`InfoCard ${dark}`}>
        <div className={'InfoCardText LightText Font--large'}>
          <h1><TextComponent text={"name"}/></h1>
        <div>Алая вспышка осветила силуэт зазубренного крыла.</div>
        <div>ABCD</div>
        <div>ABCD</div>
        </div>
      </div>
    </>
  }
}