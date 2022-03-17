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
import { BlogBaseContent } from '../../components/blog/BlogBaseContent';
import { BlogSmContent } from '../../components/blog/BlogSmContent';

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
    const content = useBreakpointValue({
        base: <BlogBaseContent posts={posts} />,
        sm: <BlogSmContent posts={posts} />,
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
