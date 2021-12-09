import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RightSideBarButton } from "./RightSideBarButton";


export const RightSideBar =()=>{
    let [selectedIndex,setSelectedIndex]=useState(0)

    return (
        <>
            {[...Array(3)].map((v,i)=>{
                return(
                    <>
                        <RightSideBarButton selectedIndex={selectedIndex} myIndex={i} setSelectedIndex={setSelectedIndex}></RightSideBarButton>
                    </>
                )
            })}
        </>
    )
}