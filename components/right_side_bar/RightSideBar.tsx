import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { RightSideBarButton } from './RightSideBarButton';
import { RightSideBarTranslateButton } from './RightSideBarTranslateButton';
import { useRouter } from 'next/router';
import { ColorModeButton } from './ColorModeButton';
import { CloseIcon } from '@chakra-ui/icons';
import { AppContext } from '../../pages/_app';

export const RightSideBar = () => {
    let [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

    const { toggleRightSideBar } = useContext(AppContext);

    const isBase = useBreakpointValue({ base: true, sm: false, md: false, lg: false });

    const buttonObjArray = [
        {
            imgSrc: '/right_side_bar/home.png',
            title: 'HOME',
            link: '/',
        },
        {
            imgSrc: '/right_side_bar/blog.png',
            title: 'BLOG',
            link: '/blog',
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

    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        console.log('render');
        buttonObjArray.some((v, i) => {
            if (pathname.indexOf(v.title.toLowerCase()) !== -1) {
                setSelectedIndex(i);
                return true;
            }
            if (pathname === '/') {
                setSelectedIndex(0);
                return true;
            }
            if (pathname.indexOf('posts') !== -1) {
                setSelectedIndex(1);
                return true;
            }
        });
    });

    return (
        <>
            <Box
                height={'100%'}
                css={{
                    '&::-webkit-scrollbar': { width: '0px' },
                }}
                overflowX={'hidden'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                {isBase && (
                    <CloseIcon
                        onClick={toggleRightSideBar}
                        cursor={'pointer'}
                        color={'rgb(118, 118, 118)'}
                        _hover={{ color: 'black' }}
                    />
                )}
                <Box marginTop={'15px'} flexBasis={'auto'}>
                    <RightSideBarTranslateButton
                        imgSrc={'/translate.png'}
                    ></RightSideBarTranslateButton>
                </Box>
                <Box marginTop={'55px'} flexBasis={'auto'}>
                    <ColorModeButton p={'13px'} imgSrc={'/translate.png'}></ColorModeButton>
                </Box>
                <Box marginTop={'45px'}>
                    {selectedIndex !== undefined &&
                        buttonObjArray.map((v, i) => {
                            return (
                                <RightSideBarButton
                                    key={i}
                                    imgSrc={v.imgSrc}
                                    title={v.title}
                                    selectedIndex={selectedIndex!}
                                    myIndex={i}
                                    setSelectedIndex={setSelectedIndex}
                                    link={v.link}
                                    marginTop={'40px'}
                                />
                            );
                        })}
                </Box>
            </Box>
        </>
    );
};
