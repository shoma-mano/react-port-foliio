import { ReactChildren, ReactElement, useContext } from 'react';
import { Box, useColorModeValue, Text } from '@chakra-ui/react';
import { LeftSideBar } from './left_side_bar/LeftSideBar';
import { RightSideBar } from './right_side_bar/RightSideBar';
import { TopBar } from './top_bar/TopBar';
import { AppContext } from '../pages/_app';

export const Layout = ({ children }: { children: ReactElement }) => {
    const bg = useColorModeValue('white', '#242526');
    const { isRightSideBarOpen, isLeftSideBarOpen } = useContext(AppContext);

    return (
        <>
            <Box
                position={'fixed'}
                top={{
                    base: '0px',
                    sm: '-100px',
                    md: '-100px',
                }}
                height={'60px'}
                boxShadow={'sm'}
                width={'100vw'}
                bg={bg}
                zIndex={10}
                border={'none'}
            >
                <TopBar></TopBar>
            </Box>
            <Box
                position='fixed'
                left={{
                    base: isLeftSideBarOpen ? '0px' : '-290px',
                    sm: '-290px',
                    md: '0px',
                }}
                px={'7'}
                py={'5'}
                w='290px'
                top={0}
                h='100vh'
                bg={bg}
                boxShadow='xl'
                zIndex={'10'}
                transition={"all 0.3s"}
            >
                <LeftSideBar onClick={() => console.log('ok')}></LeftSideBar>
            </Box>
            <Box
                position='fixed'
                right={{
                    base: isRightSideBarOpen ? '0px' : '-100px',
                    sm: '0px',
                    md: '0px',
                }}
                p={5}
                top={0}
                w='100px'
                h='100vh'
                bg={bg}
                boxShadow='md'
                zIndex={'10'}
                border={'none'}
                transition={"all 0.3s"}
                // transition={'all 0.5s'}
            >
                <RightSideBar></RightSideBar>
            </Box>
            {children}
        </>
    );
};
