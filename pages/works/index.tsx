import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import {
    Box,
    Divider,
    Link,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { EnglishIntroduceCard } from '../../components/home/EnglishIntroduceCard';
import { RoundIcon } from '../../components/ui_parts/RoundIcon';
import * as React from 'react';
import { useContext, useState } from 'react';
import { AppContext } from '../_app';
import { JapaneseWorkCard } from '../../components/works/JapaneseWorkCard';
import { Border } from '../../components/ui_parts/Border';

export const Index = () => {
    const { selectedLanguage } = useContext(AppContext);
    const bg = useColorModeValue('#fafafa', '#18191A');
    const cardBg = useColorModeValue('white', '#242526');
    const [tabIndex, setTabIndex] = useState<number>(0);
    const tabs = ['All', 'Company Project', 'Private Project'];

    const contents = [
        {
            pageLink: 'https://masaki-satoko.net',
            imgSrc: 'https://i.gyazo.com/9d414c9cd0984b434c7a039c2543322f.jjpg',
            stack: ['NextJS', 'Chakra UI', 'Jotai', 'Hasura', 'Cloudinary'],
            type: 'private',
        },
    ];

    const getFilteredContents = () => {
        const switchObj: any = {
            All: contents,
            'Company Project': contents.filter((content) => content.type === 'company'),
            'Private Project': contents.filter((content) => content.type === 'private'),
        };
        return switchObj[tabs[tabIndex]];
    };

    return (
        <>
            <Box
                minHeight={'100vh'}
                width={{ base: '100vw', sm: 'calc(100vw - 100px)', md: 'calc(100vw - 390px)' }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'start'}
                marginLeft={{ base: '0px', sm: '0px', md: '290px' }}
                marginTop={{ base: '50px', sm: '0px', md: '0px' }}
                py={'20px'}
                bg={'#fafafa'}
                flexDirection={'column'}
            >
                <Text
                    fontFamily={"'Rubik', sans-serif;"}
                    textAlign={'start'}
                    fontSize={'38px'}
                    fontWeight={'700'}
                    mt={'15px'}
                    width={'88%'}
                >
                    WORKS
                </Text>
                <Tabs
                    width={'90%'}
                    align={'start'}
                    onChange={(index) => setTabIndex(Number(index))}
                >
                    <TabList
                        mt={'5px'}
                        _focus={{ outline: 'none', background: 'none' }}
                        fontWeight={'700'}
                        fontSize={'20px'}
                        fontFamily={"'Rubik', sans-serif;"}
                    >
                        {tabs.map((v) => (
                            <Tab
                                key={v}
                                color={'#9e9e9e'}
                                borderBottom={'solid 3px'}
                                Width={'2px'}
                                fontWeight={'700'}
                                fontSize={'20px'}
                                _active={{ background: 'none' }}
                                _focus={{ outline: 'none' }}
                            >
                                {v}
                            </Tab>
                        ))}
                    </TabList>
                </Tabs>
                <Box
                    mt={'25px'}
                    bg={bg}
                    ml={{ base: '0px', sm: '0px' }}
                    width={'95%'}
                    py={'20px'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    {selectedLanguage === 'ja' ? (
                        getFilteredContents().map((content: any) => (
                            <Box key={content.pageLink} width={'92%'} maxWidth={'830px'}>
                                <JapaneseWorkCard
                                    pageLink={'https://masaki-satoko.net'}
                                    imgSrc={
                                        'https://i.gyazo.com/9d414c9cd0984b434c7a039c2543322f.jpg'
                                    }
                                    stack={['NextJS', 'Chakra UI', 'Jotai', 'Hasura', 'Cloudinary']}
                                />
                            </Box>
                        ))
                    ) : (
                        <EnglishIntroduceCard />
                    )}
                </Box>
            </Box>
        </>
    );
};

export default Index;
