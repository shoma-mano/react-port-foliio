import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ProfileComponent } from './ProfileComponent';
import { SkillSetComponent } from './SkillSetComponent';
import { SpanWrapper } from '../ui_parts/SpanWrapper';
import { languageContext } from "../../pages/_app";

export const SideBarContent = ({onClick}: { onClick: () => void }) => {

    const {selectedLanguage} = useContext(languageContext);

    const profileArray = [
        {
            label: '年齢',
            value: '25',
            unit: '歳',
        },
        {
            label: '会社',
            value: 'R-UNIT',
        },
        {
            label: '性別',
            value: '男',
        },
        {
            label: '住所',
            value: '東京都江戸川区',
            fontSize: 13,
        },
    ];

    const IconList = [
        {
            padding: "6px",
            src: "/sns_icon/twitter.svg",
            bg: "theme"
        },
        {
            padding: "6px",
            src: "/sns_icon/github.svg",
            bg: "theme"
        },
        {
            padding: "2px",
            src: "/sns_icon/qiita.png",
            bg: ""
        }
    ]

    const skillSet = {
        React: 90,
        TypeScript:90,
        Nestjs: 80,
        Docker:80,
        AWS: 75,
        Terraform: 75,
        Vue: 70,
        GraphQL: 70,
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
                    {IconList.map(v => (
                        <Image key={v.src} border={"none"} padding={v.padding} bg={v.bg} borderRadius={"20px"}
                               src={v.src} width={6} height={6}>
                        </Image>))
                    }
                </Box>
                <Box overflowY={'scroll'} height={'100%'}>
                    <Box mt={'25px'}>
                        <ProfileComponent profileArray={profileArray}></ProfileComponent>
                    </Box>
                    <Box mt={"25px"}>
                        <SkillSetComponent
                            skillSetObj={skillSet}
                            title={'関心のある技術'}
                        ></SkillSetComponent>
                    </Box>
                </Box>
            </Box>
            <Box mt={'25px'} opacity='0.7' height={'2px'} bg={'#e5e5e5'}></Box>

            {/*<Button m="auto" display={"block"} onClick={onClick}>Home</Button>*/}
        </>
    );
};
