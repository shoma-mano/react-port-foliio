import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RightSideBarButton } from "./RightSideBarButton";


export const RightSideBar = () => {
    let [selectedIndex, setSelectedIndex] = useState(0)
    const buttonObjArray = [
        {
            imgSrc: "/home.png",
            title: "home"
        },
        {
            imgSrc: "/education.png",
            title: "education"
        },
        {
            imgSrc:"/works.png",
            title:"WORKS"
        }
    ]

    return (
        <>
            {buttonObjArray.map((v, i) => {
                return (
                    <>
                        <RightSideBarButton imgSrc={v.imgSrc} title={v.title} selectedIndex={selectedIndex} myIndex={i}
                                            setSelectedIndex={setSelectedIndex}></RightSideBarButton>
                    </>
                )
            })}
        </>
    )
}