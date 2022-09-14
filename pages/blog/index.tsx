import { getAllPosts } from '../../lib/api.js';
import { useBreakpointValue } from '@chakra-ui/react';
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
