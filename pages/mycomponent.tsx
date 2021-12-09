import { NextPage } from "next";
import React from "react"

export const MyComponent:NextPage<{name?:string}>=(props)=>{
    return (
        <React.Fragment>
        <p>hello,{props.name}</p>
            {props.children}
            {props.children}
        </React.Fragment>
    )
}