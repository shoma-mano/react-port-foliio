import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { RightSideBarButton } from './RightSideBarButton';
import { RightSideBarTranslateButton } from "./RightSideBarTranslateButton";

export const RightSideBar = () => {
    let [selectedIndex, setSelectedIndex] = useState(0);
    const buttonObjArray = [
        {
            imgSrc: '/home.png',
            title: 'HOME',
            link: '/',
        },
        {
            imgSrc: '/education.png',
            title: 'EDUCATION',
            link: '/education',
        },
        {
            imgSrc: '/works.png',
            title: 'WORKS',
            link: '/works',
        },
    ];

    return (
        <>
            <Box height={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Box marginTop={"15px"} flexBasis={"auto"}>
                    <RightSideBarTranslateButton imgSrc={"/translate.png"}></RightSideBarTranslateButton>
                </Box>
                <Box marginTop={"55px"}>
                    {buttonObjArray.map((v, i) => {
                        return (
                            <>
                                <RightSideBarButton
                                    key={v.title}
                                    imgSrc={v.imgSrc}
                                    title={v.title}
                                    selectedIndex={selectedIndex}
                                    myIndex={i}
                                    setSelectedIndex={setSelectedIndex}
                                    link={v.link}
                                    marginTop={"20px"}
                                ></RightSideBarButton>
                            </>
                        );
                    })}
                </Box>
            </Box>
        </>
    );
};
