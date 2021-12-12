import { Box, Image, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react';
import { languageContext } from '../../pages/_app';

export const RightSideBarTranslateButton = ({
    imgSrc,
    title,
}: {
    imgSrc: string;
    title: string;
}) => {
    const pop_up = useRef<HTMLDivElement>(null);
    const right_bar_button = useRef<HTMLDivElement>(null);
    const { selectedLanguage,toggleLanguage } = useContext(languageContext);

    const onClick = () => {
        toggleLanguage();
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
                    borderRadius={'3px'}
                    width={'80px'}
                    ref={pop_up}
                    bg={selectedLanguage=== "ja" ? '#b74b4bc7' : '#554db9'}
                    transition={'all 400ms'}
                    mb={"10px"}
                >
                    <Text height={"20px"} fontSize={'14px'} lineHeight={"20px"} color={'white'} textAlign={'center'}>
                        {selectedLanguage=== "ja" ? "日本語":"English"}
                    </Text>
                </Box>
                <Box
                    ref={right_bar_button}
                    transition={'all 200ms'}
                    cursor={'pointer'}
                    h={'50px'}
                    w={'50px'}
                    p={'15px'}
                    bg={selectedLanguage=== "ja" ?'rgb(221 157 157 / 55%)' : 'rgb(69 69 197 / 49%)'}
                    borderRadius={'30px'}
                >
                    <Image src={imgSrc}></Image>
                </Box>
            </Box>
        </>
    );
};
