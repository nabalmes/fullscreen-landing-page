import React from "react";
import  "../Youtube/DetoxUi.css"
import o1 from "../Assets/o1.png"
import o3 from "../Assets/o3.png"


const DetoxUi = () => {
    return (
        <div className="main-div">
            <div className="header">
                <div className="header-left">
                    <h2>cure.</h2>
                </div>
                <div className="header-right">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="orange-diag"></div>
            <div className="orange-main">
                <div className="transparent-text">
                    <h1 className="transparent-text-heading">
                        <span className="tt-span-one">CU</span>
                        <span className="tt-span-two">RE</span>
                    </h1>
                </div>
                <div className="orange-subsec1">
                    <h1 className="head-main">
                        <span className="head-left">DET</span>
                        <img className="o3" src={o3} alt=""/>
                        <span className="head-right">X</span>
                    </h1>
                    <p>A typical detox diet involves a period of fasting followed by strick
                        dieb of fruits, vegetables, fruit juices and water.
                    </p>
                </div>
                <div className="readmore">
                    <p>-Scroll For More</p>
                </div>
                <div className="o1">
                    <img src={o1} alt="hehe"/>
                </div>
            </div>
        </div>
    )
}

export default DetoxUi;