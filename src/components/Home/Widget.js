import React from 'react'
import "../../App.css"

function Widget(props) {
    return (
        <>
        
        <div className="container-widget col-sm-4">
        <span className="widget-text ">Tap Widget {props.id}</span>
        <span><i onClick={()=>console.log(`widget ${props.id}`)} class="fas fa-pen edit"></i></span>
        <span><i onClick={()=>console.log(`deleted ${props.id}`)} class="fas fa-trash-alt delete"></i></span>
        </div>
        
        </>
    )
}

export default Widget
