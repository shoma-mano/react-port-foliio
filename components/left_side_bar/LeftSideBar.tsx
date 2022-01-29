import { Box, Button, Image, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ProfileComponent } from './ProfileComponent';
import { SkillSetComponent } from './SkillSetComponent';
import { SpanWrapper } from '../ui_parts/SpanWrapper';
import { AppContext } from '../../pages/_app';
import { CloseIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export const LeftSideBar = ({ onClick }: { onClick: () => void }) => {
    const { selectedLanguage, toggleLeftSideBar } = useContext(AppContext);
    const iconListBg = useColorModeValue('theme', '#0095ff');
    const router = useRouter();

    const isBase = useBreakpointValue({ base: true, sm: false, md: false, lg: false });

    const profileArray = [
        {
            ja: {
                label: '年齢',
                value: '25',
                unit: '歳',
            },
            en: {
                label: 'age',
                value: '25',
                unit: 'Years old',
            },
        },
        {
            ja: {
                label: '会社',
                value: 'R-UNIT',
            },
            en: {
                label: 'Company',
                value: 'R-UNIT',
            },
        },
        {
            ja: {
                label: '性別',
                value: '男',
            },
            en: {
                label: 'Gender',
                value: 'Man',
            },
        },
        {
            ja: {
                label: '住所',
                value: '東京都江戸川区',
                fontSize: 13,
            },
            en: {
                label: 'Address',
                value: 'Tokyo',
                fontSize: 23,
            },
        },
    ];

    const IconList = [
        {
            padding: '6px',
            src: '/sns_icon/twitter.svg',
            link: 'https://twitter.com/ms2geki_m',
        },
        {
            padding: '6px',
            src: '/sns_icon/github.svg',
            link: 'https://github.com/shoma-mano',
        },
        {
            padding: '2px',
            src: '/sns_icon/qiita.png',
            link: 'https://qiita.com/ms2geki',
            bg: 'none',
        },
    ];

    const skillSet = {
        React: 90,
        TypeScript: 90,
        Nestjs: 80,
        Docker: 80,
        Hasura: 75,
        FireBase: 75,
        AWS: 75,
        Terraform: 75,
        Vue: 70,
        GraphQL: 70,
    };

    return (
        <>
            <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                {isBase && (
                    <CloseIcon
                        ml={'220px'}
                        onClick={toggleLeftSideBar}
                        cursor={'pointer'}
                        color={'rgb(118, 118, 118)'}
                        _hover={{ color: 'black' }}
                    />
                )}
                <Image
                    borderRadius={'250px'}
                    boxSize='150px'
                    height={'260px'}
                    margin='auto'
                    mt={'10px'}
                    border={'1px solid'}
                    borderColor={'#00000021'}
                    bg={'rgb(205 205 205)'}
                    src='/mychemical.png'
                    filter={'brightness(1.2)'}
                ></Image>
                <Text textAlign={'center'} fontSize={'20px'} fontWeight={'700'} mt={'32px'}>
                    {selectedLanguage === 'ja' ? '真野 笑馬' : 'Shoma Mano'}
                </Text>
                <Text textAlign={'center'} mt={'10px'} fontSize={'13px'} fontWeight={'200'}>
                    {selectedLanguage === 'ja' ? (
                        <span>
                            Web
                            <Box as={'span'} opacity={'0.5'}>
                                エンジニア
                            </Box>
                        </span>
                    ) : (
                        'Software Engineer'
                    )}
                </Text>
                <Box
                    display={'flex'}
                    width={'50%'}
                    justifyContent={'space-between'}
                    margin={'auto'}
                    mt={'10px'}
                    color={'gray500'}
                >
                    {IconList.map((v) => (
                        <Image
                            key={v.src}
                            cursor={'pointer'}
                            onClick={() => router.push(v.link)}
                            border={'none'}
                            padding={v.padding}
                            bg={v.bg ? v.bg : iconListBg}
                            borderRadius={'20px'}
                            src={v.src}
                            width={6}
                            height={6}
                        ></Image>
                    ))}
                </Box>
                <Box
                    css={{
                        '&::-webkit-scrollbar': { width: '4px' },
                    }}
                    overflowY={'scroll'}
                    height={'100%'}
                >
                    <Box mt={'25px'}>
                        <ProfileComponent
                            profileArray={profileArray.map((v) => v[selectedLanguage])}
                        ></ProfileComponent>
                    </Box>
                    <Box mt={'25px'}>
                        <SkillSetComponent
                            skillSetObj={skillSet}
                            title={
                                selectedLanguage === 'ja' ? '関心のある技術' : 'My Favorite Stack'
                            }
                        ></SkillSetComponent>
                    </Box>
                </Box>
            </Box>
            <Box mt={'25px'} opacity='0.7' height={'2px'} bg={'#e5e5e5'}></Box>

            {/*<Button m="auto" display={"block"} onClick={onClick}>Home</Button>*/}
        </>
    );
};
