import { Box, Image, Text, useColorMode } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react';
import { languageContext } from '../../pages/_app';

export const ColorModeButton = ({ imgSrc }: { imgSrc: string }) => {
    const right_bar_button = useRef<HTMLDivElement>(null);

    const {colorMode,toggleColorMode} =useColorMode()

    const onClick = () => {
        toggleColorMode()
    };

    return (
        <>
            <Box
                marginTop={'10px'}
                onClick={onClick}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Box
                    ref={right_bar_button}
                    transition={'all 200ms'}
                    cursor={'pointer'}
                    h={'50px'}
                    w={'50px'}
                    p={'13px'}
                    bg={'rgb(227 224 224)'}
                    _hover={{bg:"#e9e6e6e8"}}
                    borderRadius={'30px'}
                >
                    <Image src={colorMode==="dark"?"/moon.svg":"/sun.png"}></Image>
                </Box>
            </Box>
        </>
    );
};
