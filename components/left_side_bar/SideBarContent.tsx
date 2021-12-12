import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { ProfileComponent } from './ProfileComponent';
import { SkillSetComponent } from './SkillSetComponent';

export const SideBarContent = ({ onClick }: { onClick: () => void }) => {
    const profile = {
        年齢: '25歳',
        会社: 'R-UNIT',
        性別: '男',
        住所: '東京都江戸川区',
    };

    const skillSet = {
        react: 70,
        vue: 80,
        rails: 60,
        Nestjs: 60,
        graphQL: 60,
        AWS: 70,
        terraform: 70,
    };

    return (
        <>
            <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    margin='auto'
                    mt={'10px'}
                    bg={'rgb(205 205 205)'}
                    src='/selfie.png'
                    filter={'brightness(1.2)'}

                ></Image>
                <Text textAlign={'center'} fontSize={'20px'} fontWeight={'700'} mt={'32px'}>
                    真野 笑馬
                </Text>
                <Text
                    textAlign={'center'}
                    mt={'10px'}
                    fontSize={'13px'}
                    fontWeight={'100'}
                    opacity={'0.5'}
                >
                    フロントエンドエンジニア
                </Text>
                <Box
                    display={'flex'}
                    width={'50%'}
                    justifyContent={'space-between'}
                    margin={'auto'}
                    mt={'10px'}
                    color={'gray500'}
                >
                    <Image
                        border={'none'}
                        padding={'6px'}
                        bg={'theme'}
                        borderRadius={'20px'}
                        src='/twitter.svg'
                        alt='Vercel Logo'
                        width={6}
                        height={6}
                    />
                    <Image
                        border={'none'}
                        bg={'theme'}
                        padding={'6px'}
                        borderRadius={'20px'}
                        src='/github.svg'
                        alt='Vercel Logo'
                        width={6}
                        height={6}
                    />
                    <Image
                        border={'none'}
                        padding={'2px'}
                        bg={''}
                        borderRadius={'20px'}
                        src='/qiita.png'
                        alt='Vercel Logo'
                        width={6}
                        height={6}
                    />
                </Box>
                <Box mt={'25px'} opacity='0.7' height={'5px'} bg={'#e5e5e5'}></Box>
                <Box overflowY={'scroll'} height={'100%'}>
                    <ProfileComponent
                        profileObj={profile}
                        title={'プロフィール'}
                    ></ProfileComponent>
                    <SkillSetComponent
                        skillSetObj={skillSet}
                        title={'スキルセット'}
                    ></SkillSetComponent>
                </Box>
            </Box>
            <Box mt={'25px'} opacity='0.7' height={'2px'} bg={'#e5e5e5'}></Box>

            {/*<Button m="auto" display={"block"} onClick={onClick}>Home</Button>*/}
        </>
    );
};
