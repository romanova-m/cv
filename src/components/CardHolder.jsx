import Card from "./Card";
import InfoCard from "./InfoCard";
import React from "react";
import {store} from "../index";

export class CardHolder extends React.Component {
  render() {
    return <div className="CardHolder">
      <Card dark={store.getState().theme.dark}/>
      <InfoCard/>
    </div>
  }
}