import React from "react";
import {store} from "../index";
export default class InfoCard extends React.Component{
  render() {
    let dark = store.getState().theme.dark? "DarkInfo" : ""
    return <div className={`InfoCard ${dark}`}>ABCD
    </div>
  }
}