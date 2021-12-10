import { Box, Image, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useContext, useEffect, useRef } from "react";
import { languageContext } from "../../pages/_app";

export const RightSideBarButton = (
    {
        selectedIndex,
        myIndex,
        setSelectedIndex,
        imgSrc,
        title,
    }: {
        selectedIndex: number,
        myIndex: number,
        setSelectedIndex: Dispatch<SetStateAction<number>>,
        imgSrc: string,
        title: string
    }
) => {
    const pop_up = useRef<HTMLDivElement>(null)
    const right_bar_button = useRef<HTMLDivElement>(null)
    const {toggleLanguage} = useContext(languageContext)
    const onMouseEnter = () => {
        pop_up.current!.style.visibility = "visible"
        pop_up.current!.style.opacity = "1"
        pop_up.current!.style.transform = "translateY(-80px)"
    }

    const onMouseLeave = () => {
        if (selectedIndex === myIndex) return
        pop_up.current!.style.visibility = "hidden"
        pop_up.current!.style.opacity = "0"
        pop_up.current!.style.transform = "translateY(-40px)"
    }

    const onClick = () => {
        right_bar_button.current!.style.backgroundColor = "var(--chakra-colors-theme)"
        setSelectedIndex(myIndex);
        toggleLanguage()
    }

    useEffect(() => {
            if (selectedIndex === myIndex) return;
            onMouseLeave()
            right_bar_button.current!.style.backgroundColor = "rgb(250,250,250)"
        }
    )


    return (
        <>
            <Box marginTop={"20px"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                 onClick={onClick} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Box h={"50px"}
                     w={"50px"}
                     ref={right_bar_button}
                     _hover={{bg: "theme"}}
                     transition={"all 400ms"}
                     cursor={"pointer"}
                     p={"15px"}
                     bg={myIndex === 0 ?"theme":"rgb(250,250,250)"}
                     borderRadius={"30px"}>
                    <Image alt={"not found"} h={"20px"} w={"20px"} src={imgSrc}></Image>
                </Box>
                <Box borderRadius={"3px"}
                     width={"80px"}
                     ref={pop_up}
                     bg={"black"}
                     transition={"all 400ms"}
                     visibility={myIndex === 0 ? "visible" : "hidden"}
                     opacity={myIndex === 0 ? 1 : 0}
                     transform={myIndex === 0 ? "translateY(-80px)" : "translateY(-40px)"}>
                    <Text fontSize={"10px"} color={"white"} textAlign={"center"}>{title}</Text>
                </Box>
            </Box>
        </>
    )
}