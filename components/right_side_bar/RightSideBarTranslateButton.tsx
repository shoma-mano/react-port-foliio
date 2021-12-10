import { Box, Image, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useContext, useEffect, useRef } from "react";
import { languageContext } from "../../pages/_app";

export const RightSideBarTranslateButton = (
    {
        imgSrc,
        title,
    }: {
        imgSrc: string,
        title:string
    }
) => {
    const pop_up = useRef<HTMLDivElement>(null)
    const right_bar_button = useRef<HTMLDivElement>(null)
    const{ toggleLanguage } =useContext(languageContext)

    const onClick = () => {
        toggleLanguage()
    }

    return (
        <>
            <Box marginTop={"20px"} onClick={onClick} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Box ref={right_bar_button} _hover={{bg: "theme"}} transition={"all 400ms"} cursor={"pointer"}
                     p={"15px"}
                     bg={"rgb(250,250,250)"} borderRadius={"30px"}>
                    <Image src={imgSrc}></Image>
                </Box>
                <Box borderRadius={"3px"} width={"80px"} ref={pop_up} bg={"black"} transition={"all 400ms"}
                     visibility={"hidden"} opacity={0} transform={"translateY(-40px)"}>
                    <Text fontSize={"10px"} color={"white"} textAlign={"center"}>{title}</Text>
                </Box>
            </Box>
        </>
    )
}