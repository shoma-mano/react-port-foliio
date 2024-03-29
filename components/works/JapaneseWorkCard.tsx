import {
    Badge,
    Box,
    Icon,
    Image,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import { CherryBlossom } from '../animation/CherryBlossom';
import { GitHubIcon } from '../ui_parts/icon/GitHubIcon';

export const JapaneseWorkCard = ({
    imgSrc,
    stack,
    pageLink,
}: {
    imgSrc: string;
    stack: string[];
    pageLink: string;
}) => {
    const bg = useColorModeValue('white', '#242526');
    let stackText = '';
    stack.forEach((v, i) => {
        stackText = stackText + v + (i !== stack.length - 1 ? ' / ' : '');
    });

    return (
        <>
            <Box
                transition={'all 20ms'}
                boxShadow={'lg'}
                w={'100%'}
                h={'100%'}
                bg={bg}
                py={'20px'}
                px={'15px'}
                borderRadius={'4px'}
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Box
                    onClick={() => (window.location.href = pageLink)}
                    cursor={'pointer'}
                    marginRight={'10px'}
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    width={'50%'}
                    minWidth={'300px'}
                >
                    <Image
                        alt={'work'}
                        style={{
                            width: '100%',
                            zIndex: 6,
                        }}
                        src={imgSrc}
                    />
                </Box>
                <Box
                    marginRight={'10px'}
                    display={'flex'}
                    flexDirection={'column'}
                    width={'50%'}
                    pl={'10px'}
                >
                    <Box display={'flex'} alignItems={'center'}>
                        <Box
                            _hover={{ borderBottom: '1px solid' }}
                            boxSizing={'border-box'}
                            height={'35px'}
                        >
                            <Text
                                fontSize={'1.5em'}
                                fontWeight={'700'}
                                fontFamily={"'Rubik', sans-serif;"}
                                cursor={'pointer'}
                                display={'block'}
                                onClick={() => (window.location.href = pageLink)}
                            >
                                WEDDING APP
                            </Text>
                        </Box>
                        <Badge ml={'10px'} h={'20px'}>
                            Private
                        </Badge>
                    </Box>
                    <Box mt={'2px'} display={'flex'} alignItems={'center'}>
                        <Text noOfLines={1}>{stackText}</Text>
                        <Box
                            d={'flex'}
                            cursor={'pointer'}
                            alignItems={'center'}
                            onClick={() =>
                                (location.href = 'https://github.com/shoma-mano/wedding')
                            }
                        >
                            <GitHubIcon ml={'13px'} />
                            {/*<Image alt={'github'} ml={'10px'} boxSize={'20px'} src={'/github.svg'} />*/}
                            <Text ml={'3px'} fontFamily={"'Rubik', sans-serif;"}>
                                GitHub
                            </Text>
                        </Box>
                    </Box>
                    <Text
                        noOfLines={8}
                        wordBreak={'break-all'}
                        fontSize={'15px'}
                        mt={'12px'}
                        color={'#000000ad'}
                    >
                        叔母の結婚式の為の寄せ書き＆写真共有アプリを作成しました。
                        <br />
                        HasuraCloudなど、開発スピードを最重視した技術選定をしました。
                    </Text>
                </Box>
            </Box>
        </>
    );
};
