import { Box, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const SkillSetComponent = ({skillSetObj, title}: { skillSetObj: any, title: string }) => {
    return <>
        <Text mt={"15px"} fontWeight={"700"}>{title}</Text>
        {Object.keys(skillSetObj).map((key, index) => {
            return (
                    <Box key={key}>
                        <Box fontFamily={"theme"} mt={"15px"} display={"flex"}
                             justifyContent={"space-between"}>
                            <Text fontFamily={"theme"} p={"5px 8px"}>{key}</Text>
                            <Text lineHeight={"29px"}>{skillSetObj[key]}</Text>
                        </Box>
                        <Box p={"1px 1px"} border={"1px solid"} height={"8px"} borderColor={"theme"}>
                            <Box bg={"theme"} w={skillSetObj[key] + "%"} h={"100%"}></Box>
                        </Box>
                    </Box>
                // <Box fontFamily={"theme"} mt={"15px"} key={key} display={"flex"}
                //      justifyContent={"space-between"}>
                //     <Text fontFamily={"theme"} p={"5px 8px"} bg={"theme"}>{key}:</Text>
                //     <Text lineHeight={"29px"}>{skillSetObj[key]}</Text>
                // </Box>
            )
        })}
        <Box mt={"25px"} opacity="0.7" height={"2px"} bg={"#e5e5e5"}></Box>
    </>
}