import React from "react";
import "../sass/App.css";
import InfoCard from "./InfoCard";
import {store} from "../index";
import {ContentBlock} from "./ContentBlock";
import {CardHolder} from "./CardHolder";
import { withTranslation } from 'react-i18next';

class Home extends React.Component {
  render() {
    let dark = store.getState().theme.dark;
    return <div className={dark ? "Home Dark" : "Home"}>
      <header>
        <CardHolder/>
        <ContentBlock/>
        <ContentBlock/><InfoCard/>
        <ContentBlock/><InfoCard/>
        <ContentBlock/><InfoCard/>
        <ContentBlock/><InfoCard/>
        <ContentBlock/><InfoCard/>
      </header>
    </div>
  }
}

export default withTranslation()(Home)