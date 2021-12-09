import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const ProfileComponent=({profileObj,title}:{profileObj:any,title:string})=>{
    return <>
        <Text mt={"15px"} fontWeight={"700"}>{title}</Text>
        {Object.keys(profileObj).map((key, index) => {
            return (
                <Box fontFamily={"theme"} mt={"15px"} key={key} display={"flex"}
                     justifyContent={"space-between"}>
                    <Text fontFamily={"theme"} p={"5px 8px"} bg={"theme"}>{key}:</Text>
                    <Text lineHeight={"29px"}>{profileObj[key]}</Text>
                </Box>)
        })}
        <Box mt={"25px"} opacity="0.7" height={"2px"} bg={"#e5e5e5"}></Box>
    </>
}