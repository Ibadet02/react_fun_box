import React from "react";
import "../styles/Animation.css"
import myimg from "../Components/images/ondasagol.png"
export default function Animation(props){
    var copyProps={...props}
    if(copyProps.circle[0]==="circle"){
        document.querySelector(".animation").style.overflow="hidden"
    }
    if(copyProps.open[0]==="open"){
        document.querySelector(".animation").style.overflow="visible"
    }
    if(copyProps.rotate[0]==="rotate" && copyProps.open[0]==="open"){
        const imgHeight=document.querySelector("img").height
        document.querySelector(".sidebar").style.transform=`translateY(${imgHeight}px)`
    }
    if(copyProps.close[0]==="close"){
        document.querySelector(".sidebar").style.transform=""
    }
    return (
        <div className={`animation ${props.circle[0]} ${copyProps.rotate[0]} ${copyProps.big[0]} ${props.normal[0]} ${copyProps.small[0]}`}>
            <img src={myimg} className={`${props.open[0]}`}/>
            <div className={`box left ${props.close[0]} ${props.open[0]}`}>
            </div>
            <div className={`box right ${props.close[0]} ${props.open[0]}`}>
            </div>
        </div>
    )
}