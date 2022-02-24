import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';

const border = ({ width='100%' }: any | { width: string }) => {
    return <Box width={width} borderTop={'1px solid'}/>;
};

export const Border =chakra("div",{
    shouldForwardProp:prop=>true,
    baseStyle:{
        borderTop:'solid #00000026'
    }
})

