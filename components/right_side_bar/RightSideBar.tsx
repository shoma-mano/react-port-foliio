import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { RightSideBarButton } from './RightSideBarButton';
import { RightSideBarTranslateButton } from './RightSideBarTranslateButton';

export const RightSideBar = () => {
    let [selectedIndex, setSelectedIndex] = useState(0);
    const buttonObjArray = [
        {
            imgSrc: '/right_side_bar/home.png',
            title: 'HOME',
            link: '/',
        },
        {
            imgSrc: '/right_side_bar/education.png',
            title: 'HISTORY',
            link: '/history',
        },
        {
            imgSrc: '/right_side_bar/works.png',
            title: 'WORKS',
            link: '/works',
        },
    ];

    return (
        <>
            <Box height={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Box marginTop={'15px'} flexBasis={'auto'}>
                    <RightSideBarTranslateButton
                        imgSrc={'/translate.png'}
                    ></RightSideBarTranslateButton>
                </Box>
                <Box marginTop={'55px'}>
                    {buttonObjArray.map((v, i) => {
                        return (
                            <>
                                <RightSideBarButton
                                    key={v.title}
                                    imgSrc={v.imgSrc}
                                    title={v.title}
                                    selectedIndex={selectedIndex}
                                    myIndex={i}
                                    setSelectedIndex={setSelectedIndex}
                                    link={v.link}
                                    marginTop={'40px'}
                                ></RightSideBarButton>
                            </>
                        );
                    })}
                </Box>
            </Box>
        </>
    );
};
