import React, {Component} from "react";
import {Waktu,Search} from "../components";

class Hompage extends Component{
    constructor(props) {
        super(props);

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