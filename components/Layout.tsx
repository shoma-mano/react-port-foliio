import { ReactChildren } from "react";
import { Box } from "@chakra-ui/react";
import { SideBarContent } from "./left_side_bar/SideBarContent";


export const Layout=({children}:{children:ReactChildren})=>{
    return(
        <>
            <Box
                position="fixed"
                left={0}
                px={"8"}
                py={"5"}
                w="290px"
                top={0}
                h="100%"
                bg="white"
                boxShadow="xl"
            >
                <SideBarContent onClick={()=>console.log("ok")}></SideBarContent>
            </Box>
            {children}


        </>
    )
}