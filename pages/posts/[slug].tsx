import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { getPostBySlug, getAllPosts } from '../../lib/api.js';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import { Box, Text } from '@chakra-ui/react';
import markdownHtml from 'zenn-markdown-html';
import 'zenn-content-css';

export default function Post({post}: { post: any }) {
    const router = useRouter();




    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>;
    }

    return (
        <Box
            minHeight={'100vh'}
            width={{base: '100vw', sm: 'calc(100vw - 100px)', md: 'calc(100vw - 390px)'}}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            marginLeft={{base: '0px', sm: '0px', md: '290px'}}
            marginTop={{base: '60px', sm: '0px', md: '0px'}}
        >
            <Text fontWeight={'700'} mt={'45px'} fontSize={'30px'} fontFamily={"'Rubik', sans-serif;"}
                  textAlign={'center'}>{post.title}</Text>
            <Box mt={'40px'} borderRadius={'10px'} px={'25px'} py={'25px'}
                width={'90%'} bg={'white'}
            >
                <div className={'znc'} dangerouslySetInnerHTML={{__html:post.content}}></div>
            </Box>
        </Box>

    );
}

export async function getStaticProps({params}: { params: { slug: string } }) {
    const post: any = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'english',
        'coverImage',
    ]);
    const content = await markdownHtml(post.english || '');

    console.log(post.content)

    console.log(post.english)

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
