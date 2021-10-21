import React from "react";
import {store} from "../index";

export class ContentBlock extends React.Component {
  render() {
    return <div className={store.getState().theme.dark? "ContentBlock Dark" : "ContentBlock"}>123</div>;
  }
}