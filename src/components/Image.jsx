import React from "react";
import photo from "./123.jpg"

export class Image extends React.Component {
  render() {
    return <><img alt="123" src={photo} className="Image"/>
    </>
  }
}