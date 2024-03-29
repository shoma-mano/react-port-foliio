import {AspectRatio, Box, Image, Text, useBreakpointValue} from '@chakra-ui/react';
import React, {useContext} from 'react';
import {ProfileComponent} from './ProfileComponent';
import {SkillSetComponent} from './SkillSetComponent';
import {AppContext} from '../../pages/_app';
import {CloseIcon} from '@chakra-ui/icons';
import {GitHubIcon} from '../ui_parts/icon/GitHubIcon';
import {TwitterIcon} from '../ui_parts/icon/TwitterIcon';
import {ZennIcon} from '../ui_parts/icon/ZennIcon';
import {ChakraNextImage} from '../ui_parts/ChakraNextImage';

export const LeftSideBar = () => {
    const {selectedLanguage, toggleLeftSideBar} = useContext(AppContext);
    const isBase = useBreakpointValue({base: true, sm: false, md: false, lg: false});

    const currentDate = new Date().getTime();
    const myBirthDay = new Date('1996-05-09').getTime();
    const myAge= ((currentDate-myBirthDay)/1000/3600/24/365).toString().split(".")[0]


    const profileArray = [
        {
            ja: {
                label: '年齢',
                value: myAge,
                unit: '歳',
            },
            en: {
                label: 'age',
                value: myAge,
                unit: 'Years old',
            },
        },
        {
            ja: {
                label: '会社',
                value: 'VISIONARY',
            },
            en: {
                label: 'Company',
                value: 'VISIONARY',
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
                        _hover={{color: 'black'}}
                    />
                )}
                {/*<AspectRatio*/}
                {/*    ratio={1}*/}
                {/*    maxHeight={'160px'}*/}
                {/*    display={'flex'}*/}
                {/*    justifyContent={'center'}*/}
                {/*>*/}
                {/*    <Image*/}
                {/*        borderRadius={'250px'}*/}
                {/*        maxHeight={'160px'}*/}
                {/*        maxWidth={'160px'}*/}
                {/*        margin='auto'*/}
                {/*        border={'1px solid'}*/}
                {/*        borderColor={'#00000021'}*/}
                {/*        bg={'rgb(205 205 205)'}*/}
                {/*        src='/lofi.png'*/}
                {/*        filter={'brightness(1.2)'}*/}
                {/*    />*/}
                {/*</AspectRatio>*/}
                <ChakraNextImage
                    display={'flex'}
                    justifyContent={'center'}
                    height={'160px'}
                    width={'160px'}
                    borderRadius={'250px'}
                    src={'/lofi.png'}
                ></ChakraNextImage>
                <Text textAlign={'center'} fontSize={'20px'} fontWeight={'700'} mt={'32px'}>
                    {selectedLanguage === 'ja' ? 'マノ ショウマ' : 'Shoma Mano'}
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
                    <GitHubIcon
                        cursor={'pointer'}
                        onClick={() => (window.location.href = 'https://github.com/shoma-mano')}
                        borderRadius={'20px'}
                        w={'22px'}
                        h={'22px'}
                    />
                    <TwitterIcon
                        cursor={'pointer'}
                        onClick={() => (window.location.href = 'https://twitter.com/ms2geki_m')}
                    />
                    <ZennIcon
                        cursor={'pointer'}
                        w={'22px'}
                        h={'22px'}
                        fill={'black'}
                        onClick={() => (window.location.href = 'https://zenn.dev/mano_r')}
                    />
                    <Image
                        cursor={'pointer'}
                        onClick={() => (window.location.href = 'https://qiita.com/ms2geki')}
                        boxSize={'22px'}
                        borderRadius={'20px'}
                        src={'/sns_icon/qiita.png'}
                    />
                </Box>
                <Box
                    css={{
                        '&::-webkit-scrollbar': {width: '4px'},
                    }}
                    overflowY={'scroll'}
                    height={'100%'}
                >
                    <Box mt={'25px'}>
                        <ProfileComponent
                            profileArray={profileArray.map((v) => v[selectedLanguage])}
                        />
                    </Box>
                    <Box mt={'25px'}>
                        <SkillSetComponent
                            skillSetObj={skillSet}
                            title={
                                selectedLanguage === 'ja' ? '関心のある技術' : 'My Favorite Stack'
                            }
                        />
                    </Box>
                </Box>
            </Box>
            <Box mt={'25px'} opacity='0.7' height={'2px'} bg={'black'}/>
        </>
    );
};
