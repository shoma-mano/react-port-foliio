import { ReactChildren, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { LeftSideBar } from './left_side_bar/LeftSideBar';
import { RightSideBar } from './right_side_bar/RightSideBar';

export const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <Box
                position='fixed'
                left={0}
                px={'7'}
                py={'5'}
                w='290px'
                top={0}
                h='100%'
                bg='white'
                boxShadow='xl'
                zIndex={"1"}
            >
                <LeftSideBar onClick={() => console.log('ok')}></LeftSideBar>
            </Box>
            <Box
                position='fixed'
                right={0}
                p={5}
                w='100px'
                top={0}
                h='100%'
                bg='white'
                boxShadow='md'
                zIndex={"10"}
            >
                <RightSideBar></RightSideBar>
            </Box>
            {children}
        </>
    );
};
