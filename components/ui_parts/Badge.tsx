import { Box } from "@chakra-ui/react";

export const Badge =({content}:{content:string})=>{
    return(
        <Box
            borderRadius={'10px'}
            bg={'gray'}
        >
            {content}
        </Box>
    )
}