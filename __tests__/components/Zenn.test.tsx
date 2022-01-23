/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages';
import markdownHtml from 'zenn-markdown-html';
import 'zenn-content-css';




describe('ZennEditor', () => {
    it('markdownHtml', () => {
        const markdown='# title'
        const html = markdownHtml(markdown);
        console.log(html)
    });
});



