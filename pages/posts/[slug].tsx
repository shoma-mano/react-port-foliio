import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { getPostBySlug, getAllPosts } from '../../lib/api.js';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import { Box, Text, Image, Icon, useColorModeValue } from '@chakra-ui/react';
import markdownHtml from 'zenn-markdown-html';

export default function Post({ post }: { post: any }) {
    const router = useRouter();
    const date = post.date;
    const bg = useColorModeValue('white', 'rgb(36, 37, 38)');

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Box
            minHeight={'100vh'}
            width={{ base: '100vw', sm: 'calc(100vw - 100px)', md: 'calc(100vw - 390px)' }}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            marginLeft={{ base: '0px', sm: '0px', md: '290px' }}
            py={{ base: '60px', sm: '60px', md: '60px' }}
        >
            <Image boxSize={'90px'} borderRadius={'300px'} src={post.icon}></Image>
            <Text
                fontWeight={'700'}
                mt={'20px'}
                fontSize={'30px'}
                fontFamily={"'Rubik', sans-serif;"}
                textAlign={'center'}
            >
                {post.title}
            </Text>
            <Text lineHeight={'16px'} mt={'10px'}>
                <Icon verticalAlign={'bottom'} mr={'5px'}>
                    <path
                        fill='currentColor'
                        d='M18.2.7c-.8 0-1.4.5-1.4 1.3v3.1c0 .7.7 1.3 1.4 1.3s1.4-.5 1.4-1.3V2c0-.7-.7-1.3-1.4-1.3zM5.8.7C5 .7 4.4 1.3 4.4 2v3.1c0 .7.7 1.3 1.4 1.3s1.4-.5 1.4-1.3V2C7.3 1.3 6.6.7 5.8.7z'
                    ></path>
                    <path
                        fill='currentColor'
                        d='M21.7 3.6H2.3c-1.1 0-2 .9-2 2v15.7c0 1.1.9 2 2 2h19.4c1.1 0 2-.9 2-2V5.5c-.1-1-.9-1.9-2-1.9zm-.3 16.2c0 .6-.5 1.1-1.1 1.1H3.4c-.5 0-.9-.4-.9-.9V9.7h19v10.1z'
                    ></path>
                </Icon>
                {`${date}に投稿`}
                <Icon verticalAlign={'bottom'} ml={'15px'} mr={'5px'}>
                    <g fill='currentColor'>
                        <path d='M2.9 10H8c.2 0 .4-.1.6-.3.3-.3.3-.7 0-1.1l-2.2-2C7.9 5.1 9.9 4.3 12 4.3c4 0 7.2 2.9 7.7 6.8.1.7.7 1.1 1.4 1.1h.1c.8-.1 1.2-.8 1.1-1.5-.5-5.2-5-9.1-10.3-9.1-2.8 0-5.5 1.1-7.4 3.1L2.8 2.9c-.3-.3-.7-.3-1.1 0-.2.2-.2.4-.2.6v5.1c0 .7.6 1.4 1.4 1.4zM21.1 14H16c-.2 0-.4.1-.6.3-.3.3-.3.7 0 1.1l2.1 2.1C16 19 14 19.8 11.9 19.8c-4 0-7.2-2.9-7.7-6.9-.2-.7-.9-1.3-1.6-1.2-.8.1-1.2.8-1.1 1.5.5 5.2 5 9.1 10.3 9.1 2.8 0 5.5-1.1 7.4-3.1L21 21c.3.3.7.3 1.1 0 .1-.1.3-.3.3-.6v-5.1c.1-.6-.5-1.3-1.3-1.3z'></path>
                    </g>
                </Icon>
                {`${date}に更新`}
            </Text>
            <Box mt={'40px'} borderRadius={'10px'} px={'25px'} py={'25px'} width={'90%'} bg={bg}>
                <div className={`znc`} dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </Box>
        </Box>
    );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const post: any = getPostBySlug(params.slug, [
        'title',
        'icon',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'english',
        'coverImage',
    ]);
    const content = await markdownHtml(post.content || '');

    console.log(post.content);

    console.log(post.english);

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts: any = getAllPosts(['slug']);
    const pageCountArray = [...Array(posts.length)].map((_, i) => i + 1);

    return {
        paths: posts.map((post: any) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
