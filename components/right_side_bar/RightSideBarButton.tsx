import { Box, Image, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react';
import { languageContext } from '../../pages/_app';
import { useRouter } from 'next/router';

export const RightSideBarButton = ({
    selectedIndex,
    myIndex,
    setSelectedIndex,
    imgSrc,
    title,
    link,
    marginTop,
}: {
    selectedIndex: number;
    myIndex: number;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
    imgSrc: string;
    title: string;
    link: string;
    marginTop?: string;
}) => {
    const pop_up = useRef<HTMLDivElement>(null);
    const right_bar_button = useRef<HTMLDivElement>(null);
    const { selectedLanguage } = useContext(languageContext);

    const onMouseEnter = () => {
        pop_up.current!.style.visibility = 'visible';
        pop_up.current!.style.opacity = '1';
        pop_up.current!.style.transform = 'translateY(-78px)';
    };

    const onMouseLeave = () => {
        if (selectedIndex === myIndex) return;
        pop_up.current!.style.visibility = 'hidden';
        pop_up.current!.style.opacity = '0';
        pop_up.current!.style.transform = 'translateY(-40px)';
    };

    const router = useRouter();
    const onClick = () => {
        router.push(link);
        setSelectedIndex(myIndex);
    };

    useEffect(() => {
        if (selectedIndex === myIndex) return;
        onMouseLeave();
    });

    return (
        <>
            <Box
                marginTop={marginTop}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Box
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                    h={'40px'}
                    w={'40px'}
                    ref={right_bar_button}
                    _hover={{ bg: 'theme' }}
                    transition={'all 300ms'}
                    cursor={'pointer'}
                    p={'10px'}
                    bg={myIndex === selectedIndex ? 'theme' : 'rgb(227 224 224)'}
                    borderRadius={'30px'}
                >
                    <Image margin={'auto'} alt={'not found'} h={'20px'} w={'20px'} src={imgSrc}></Image>
                </Box>
                <Box
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    borderRadius={'3px'}
                    width={'80px'}
                    height={'20px'}
                    ref={pop_up}
                    bg={'black'}
                    transition={'all 400ms'}
                    visibility={myIndex === 0 ? 'visible' : 'hidden'}
                    opacity={myIndex === 0 ? 1 : 0}
                    transform={myIndex === 0 ? 'translateY(-80px)' : 'translateY(-40px)'}
                >
                    <Text
                        fontSize={'11px'}
                        lineHeight={'20px'}
                        color={'white'}
                        textAlign={'center'}
                    >
                        {title}
                    </Text>
                </Box>
            </Box>
        </>
    );
};
