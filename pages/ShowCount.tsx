import { Dispatch, SetStateAction, useEffect } from "react";
import React_2 from "framer-motion/dist/framer-motion";


export const ShowCount=({count,setCount}:{count:number,setCount: Dispatch<SetStateAction<number>>})=>{

    useEffect(()=>{
        console.log("change")
    })

    return(
        <>
            <p></p>
        </>
    )
}