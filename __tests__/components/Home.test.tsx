/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByText('Skill');

        console.log('test');

        expect(heading).toBeInTheDocument();
    });
});
