import { Box, Image } from '@chakra-ui/react';
import { useContext, useRef } from 'react';
import { AppContext } from '../../pages/_app';

export const TopBarTranslateButton = ({ imgSrc }: { imgSrc: string }) => {
    const pop_up = useRef<HTMLDivElement>(null);
    const right_bar_button = useRef<HTMLDivElement>(null);
    const { selectedLanguage, toggleLanguage } = useContext(AppContext);

    const onClick = () => {
        toggleLanguage();
    };

    return (
        <>
            <Box onClick={onClick} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Box
                    ref={right_bar_button}
                    transition={'all 200ms'}
                    cursor={'pointer'}
                    h={'35px'}
                    w={'35px'}
                    p={'10px'}
                    bg={
                        selectedLanguage === 'ja'
                            ? 'rgb(221 157 157 / 55%)'
                            : 'rgb(69 69 197 / 49%)'
                    }
                    borderRadius={'30px'}
                >
                    <Image alt={'img'} src={imgSrc} />
                </Box>
            </Box>
        </>
    );
};
