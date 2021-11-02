import React from "react";
import photo from "./123.jpg"

export class Image extends React.Component {
  render() {
    return <div className=""><img alt="avatar" src={photo} className="Image"/>
    </div>
  }
}