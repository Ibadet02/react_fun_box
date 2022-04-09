import React from "react";
import "../styles/Sidebar.css"
export default function Sidebar(props){
    const buttonNames=["Close","Open","Big","Normal","Small","Rotate","Circle"]
    const buttons=props.buttonInfos.map((_,index)=>{
        return <button disabled={props.buttonInfos[index][1]=="none"?true:false} style={{pointerEvents:props.buttonInfos[index][1],opacity:props.buttonInfos[index][1]==="none"?.5:1}} key={index} onClick={()=>props.changeClass(buttonNames[index],index)}>{buttonNames[index]}</button>
    })
    return (
        <div className="sidebar">
            {buttons}
        </div>
    )
}