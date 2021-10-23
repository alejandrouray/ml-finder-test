import React from "react";
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import SearchBar from "./SearchBar";

describe('SearchBar component', () => {
    const setup = () => {
        const history = createMemoryHistory();
        const component = render(
            <Router history={history}>
                <SearchBar />
            </Router>
        );

        const input = component.getByRole('textbox');
        const button = component.getByRole('button');
        const logo = component.getByAltText('Logo Mercado Libre');
    
        const setFullPath = ({ pathname, search }) => `${pathname}${search}`;
        const mock = { search: 'Apple' };
        
        return { button, input, history, logo, mock, setFullPath, ...component }
    }
    
    test('It should send the search value to the Search Page when the button is clicked', () => {
        const { button, input, history, mock, setFullPath } = setup();
        
        fireEvent.change(input, { target: { value: mock.search } });
        fireEvent.click(button);
        
        expect(input.value).toBe(mock.search);
        expect(setFullPath(history.location)).toBe(`/items/?search=${mock.search}`);
        expect(history.length).toBe(2);
    });
    
    test('handleKeyDown enter push to search page', () => {
        const { input, history, mock, setFullPath } = setup();
        
        fireEvent.change(input, { target: { value: mock.search } });
        fireEvent.keyDown(input, { key: 'Enter' });
    
        expect(setFullPath(history.location)).toBe(`/items/?search=${mock.search}`);
        expect(history.length).toBe(2);
    });
    
    test('The input should be cleaned when the logo is clicked', () => {
        const { input, history, logo, mock, setFullPath } = setup();
        
        fireEvent.change(input, { target: { value: mock.search } });
        fireEvent.click(logo);
        
        expect(input.value).toBe('');
        expect(setFullPath(history.location)).toBe('/');
        expect(history.length).toBe(2);
    });

    test('It should not do the push history if there is no data in the input', () => {
        const { button, input, history, setFullPath } = setup();
        
        fireEvent.click(button);
        
        expect(input.value).toBe('');
        expect(setFullPath(history.location)).toBe('/');
        expect(history.length).toBe(1);
    });
});
