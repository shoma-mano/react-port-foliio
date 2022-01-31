import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { getPostBySlug, getAllPosts } from '../../lib/api.js';
import {
    Box,
    Link,
    Text,
    Image,
    useColorModeValue,
    Input,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../_app';
import { LeftSideHistory } from '../../components/history/LeftSideHistory';
import { RightSideHistory } from '../../components/history/RightSideHistory';
import { HistorySm } from '../../components/history/HistorySm';
import { useRouter } from 'next/router';

export const Index = ({
    posts,
}: {
    posts: Array<{
        title: string;
        date: Date;
        slug: string;
        author: string;
        content: string;
        excerpt: string;
        coverImage: string;
    }>;
}) => {
    const { selectedLanguage } = useContext(AppContext);
    const bg = useColorModeValue('#f0f0f5', '#18191A');
    const router = useRouter();
    const cardBg = useColorModeValue('white', 'rgb(36, 37, 38)');

    const content = useBreakpointValue({
        base: (
            <>
                <Box
                    minHeight={'100vh'}
                    width={{ base: '100vw', sm: 'calc(100vw - 100px)', md: 'calc(100vw - 390px)' }}
                    display={'flex'}
                    justifyContent={'start'}
                    bg={bg}
                    flexDirection={'column'}
                    marginLeft={{ base: '0px' }}
                    marginTop={{ base: '60px' }}
                    alignItems={'center'}
                >
                    <Text
                        fontFamily={"'Rubik', sans-serif;"}
                        textAlign={'center'}
                        fontSize={'30px'}
                        fontWeight={'700'}
                        mt={'20px'}
                        width={'100%'}
                    >
                        TECH BLOG
                    </Text>
                    <Box
                        mt={'30px'}
                        display={'grid'}
                        gridTemplateColumns={'repeat(1fr)'}
                        gridRowGap={'40px'}
                        gridColumnGap={'5%'}
                        pb={'50px'}
                        px={'5%'}
                        width={'100%'}
                    >
                        {posts.map((post, i: any) => {
                            return (
                                <Box
                                    onClick={() => router.push(`/posts/${post.slug}`)}
                                    key={i}
                                    display={'flex'}
                                    justifyContent={'center'}
                                >
                                    <Box
                                        cursor={'pointer'}
                                        maxWidth={'340px'}
                                        border={'1px solid'}
                                        boxShadow={'md'}
                                        _hover={{ boxShadow: 'xl' }}
                                        borderRadius={'10px'}
                                        borderColor={'#00000021'}
                                        bg={cardBg}
                                        height={'400px'}
                                    >
                                        <Image
                                            src={post.coverImage}
                                            width={'100%'}
                                            height={'40%'}
                                            borderRadius={'10px 10px 0 0'}
                                        />
                                        <Box
                                            p={'20px'}
                                            display={'flex'}
                                            flexDirection={'column'}
                                            height={'60%'}
                                            width={'100%'}
                                        >
                                            <Text
                                                fontSize={`${240 / post.title.length + 10}px`}
                                                noOfLines={3}
                                                fontWeight={'700'}
                                            >
                                                {post.title}
                                            </Text>
                                            <Text
                                                fontFamily={'monospace'}
                                                maxWidth={'100%'}
                                                noOfLines={3}
                                                maxHeight={'40%'}
                                                fontSize={'15px'}
                                                mt={'10px'}
                                            >
                                                {post.excerpt}
                                            </Text>
                                            <Box
                                                flexGrow={1}
                                                display={'flex'}
                                                flexDirection={'column'}
                                                justifyContent={'flex-end'}
                                            >
                                                <Text
                                                    mr={'5px'}
                                                    fontSize={'15px'}
                                                    textAlign={'end'}
                                                    justifySelf={'self-end'}
                                                >
                                                    2022.01.17に投稿
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </>
        ),

        sm: (
            <>
                <Box
                    minHeight={'100vh'}
                    width={{ base: '100vw', sm: 'calc(100vw - 100px)', md: 'calc(100vw - 390px)' }}
                    display={'flex'}
                    justifyContent={'start'}
                    bg={bg}
                    flexDirection={'column'}
                    marginLeft={{ base: '0px', sm: '0px', md: '290px' }}
                    marginTop={{ base: '60px', sm: '0px', md: '0px' }}
                    alignItems={'center'}
                >
                    <Text
                        fontFamily={"'Rubik', sans-serif;"}
                        textAlign={'center'}
                        fontSize={'30px'}
                        fontWeight={'700'}
                        mt={'20px'}
                        width={'100%'}
                    >
                        TECH BLOG
                    </Text>
                    <Box
                        mt={'30px'}
                        display={'grid'}
                        gridTemplateColumns={'repeat(2,1fr)'}
                        gridRowGap={'40px'}
                        gridColumnGap={'5%'}
                        pb={'50px'}
                        px={'5%'}
                        width={'100%'}
                    >
                        {posts.map((post, i: any) => {
                            return (
                                <Box
                                    onClick={() => router.push(`/posts/${post.slug}`)}
                                    key={i}
                                    display={'flex'}
                                    justifyContent={'center'}
                                >
                                    <Box
                                        cursor={'pointer'}
                                        maxWidth={'340px'}
                                        border={'1px solid'}
                                        boxShadow={'md'}
                                        _hover={{ boxShadow: 'xl' }}
                                        borderRadius={'10px'}
                                        borderColor={'#00000021'}
                                        bg={cardBg}
                                        height={'400px'}
                                    >
                                        <Image
    src={post.coverImage}
    width={'100%'}
    height={'40%'}
    borderRadius={'10px 10px 0 0'}
    />
                                        <Box
                                            p={'20px'}
                                            display={'flex'}
                                            flexDirection={'column'}
                                            height={'60%'}
                                            width={'100%'}
                                        >
                                            <Text
                                                fontSize={`${350 / post.title.length + 10}px`}
                                                noOfLines={3}
                                                fontWeight={'700'}
                                            >
                                                {post.title}
                                            </Text>
                                            <Text
                                                fontFamily={'monospace'}
                                                maxWidth={'100%'}
                                                noOfLines={3}
                                                maxHeight={'40%'}
                                                fontSize={'15px'}
                                                mt={'10px'}
                                            >
                                                {post.excerpt}
                                            </Text>
                                            <Box
                                                flexGrow={1}
                                                display={'flex'}
                                                flexDirection={'column'}
                                                justifyContent={'flex-end'}
                                            >
                                                <Text
                                                    mr={'5px'}
                                                    fontSize={'15px'}
                                                    textAlign={'end'}
                                                    justifySelf={'self-end'}
                                                >
                                                    2022.01.17に投稿
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </>
        ),
    });

    return <>{content}</>;
};

export async function getStaticProps() {
    const posts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'excerpt',
    ]);

    return {
        props: {
            posts: posts,
        },
    };
}

export default Index;
