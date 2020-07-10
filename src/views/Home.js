import React, {Component, useEffect, useState} from "react";
import {Waktu,Search} from "../components";

class Hompage extends Component{
    constructor(props) {
        super(props);

    }
  componentDidMount() {

  }

    render() {
        return (

            <div className="HomePage">
            <Waktu/>

            <Search/>
            </div>
        )
    }
}

export default Hompage;