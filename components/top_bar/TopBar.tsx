import { Box, Text, Image, Icon } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeButton } from '../right_side_bar/ColorModeButton';
import { RightSideBarTranslateButton } from '../right_side_bar/RightSideBarTranslateButton';
import { TopBarTranslateButton } from './TopBarTranslateButton';
import { useContext } from 'react';
import { AppContext } from '../../pages/_app';

export const TopBar = () => {
    const { isRightSideBarOpen, toggleRightSideBar, isLeftSideBarOpen, toggleLeftSideBar } =
        useContext(AppContext);

    return (
        <Box display={'flex'} justifyContent={'space-between'} height={'100%'}>
            <HamburgerIcon
                position={'relative'}
                onClick={toggleLeftSideBar}
                left={'15px'}
                color={'rgb(118, 118, 118)'}
                my={'auto'}
                w={'25px'}
                h={'25px'}
                cursor={'pointer'}
                _hover={{ color: 'black' }}
            />
            <Box
                display={'flex'}
                sx={{ gap: '40px' }}
                alignItems={'center'}
                height={'100%'}
                my={'auto'}
                flexBasis={'auto'}
            >
                <ColorModeButton
                    h={'35px'}
                    w={'35px'}
                    p={'5px'}
                    imgSrc={'/translate.png'}
                ></ColorModeButton>
                {/*<TopBarTranslateButton imgSrc={'/translate.png'}></TopBarTranslateButton>*/}
            </Box>
            <Icon
                position={'relative'}
                right={'10px'}
                cursor={'pointer'}
                onClick={toggleRightSideBar}
                my={'auto'}
                color={'rgb(118, 118, 118)'}
                strokeWidth={'2'}
                stroke={'currentcolor'}
                height={'2em'}
                width={'2em'}
                _hover={{ color: 'black' }}
            >
                <circle cx='12' cy='12' r='0.8'></circle>
                <circle cx='12' cy='5' r='0.8'></circle>
                <circle cx='12' cy='19' r='0.8'></circle>
            </Icon>
        </Box>
    );
};
