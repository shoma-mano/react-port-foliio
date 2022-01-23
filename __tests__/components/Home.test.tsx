/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages';
import { getAllPosts, getPostBySlug } from "../../lib/api.js";

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByText('Skill');

        console.log('test');

        expect(heading).toBeInTheDocument();
    });
});



describe('api test', () => {

    it('getAllPosts', () => {
        const posts=getAllPosts([
            'title',
            'date',
            'slug',
            'author',
            'content',
            'ogImage',
            'coverImage',
        ])
        console.log(posts)
        expect(posts[0].hasOwnProperty('slug')).toBe(true)
    });


    it('getPostBySlug',()=>{
        const post = getPostBySlug('hello-world',[
            'title',
            'date',
            'slug',
            'author',
            'content',
            'ogImage',
            'coverImage',
        ])
        expect(Object.keys(post).length===7).toBe(true)
    })


});
