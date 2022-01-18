import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import { Text } from '@chakra-ui/react';

export default function Post({ post, morePosts, preview }) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Text color={'white'}>
            testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
        </Text>
    );
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ]);
    const content = await markdownToHtml(post.content || '');

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
    const posts = getAllPosts(['slug']);
    const pageCount = posts.length;

    return {
        paths: posts.map((post) => {
            console.log(post);
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
