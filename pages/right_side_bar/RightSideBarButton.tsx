import { Box, Image, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export const RightSideBarButton = ({
                                       selectedIndex,
                                       myIndex,
                                       setSelectedIndex
                                   }: { selectedIndex: number, myIndex: number, setSelectedIndex: Dispatch<SetStateAction<number>> }) => {
    const pop_up = useRef<HTMLDivElement>(null)

    const onMouseEnter=() => {
        console.log(pop_up.current!.style.visibility)
        pop_up.current!.style.visibility = "visible"
    }

    const onMouseLeave=()=>{
        pop_up.current!.style.visibility = "invisible"
    }

    const onClick=()=>{
        pop_up.current!.style.visibility="visible"
        setSelectedIndex(myIndex);
    }

    useEffect(()=>{
        if(selectedIndex===myIndex)return;
        onMouseLeave()
        }
    )


    return (
        <>
            <Box onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Box _hover={{bg: "theme"}} transition={"all 300ms"} cursor={"pointer"} p={"15px"}
                     bg={"rgb(250,250,250)"} borderRadius={"30px"}>
                    <Image src="/translate.png"></Image>
                </Box>
                <Box ref={pop_up} visibility={"hidden"}>
                    <Text textAlign={"center"}>Translate</Text>
                </Box>
            </Box>
        </>
    )
}