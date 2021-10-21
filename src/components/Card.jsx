import React from "react";
import {Image} from "./Image";
import ButtonPanel from "./ButtonPanel";

export default class Card extends React.Component{
  render() {
    return <div className="Card"><Image/><ButtonPanel dark={this.props.dark}/>
    </div>
  }
}