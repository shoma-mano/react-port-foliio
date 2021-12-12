import { ReactChildren, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { SideBarContent } from './left_side_bar/SideBarContent';
import { RightSideBar } from './right_side_bar/RightSideBar';

export const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <Box
                position='fixed'
                left={0}
                px={'8'}
                py={'5'}
                w='290px'
                top={0}
                h='100%'
                bg='white'
                boxShadow='xl'
            >
                <SideBarContent onClick={() => console.log('ok')}></SideBarContent>
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
            >
                <RightSideBar></RightSideBar>
            </Box>
            {children}
        </>
    );
};
