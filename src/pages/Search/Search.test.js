import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { GlobalProvider } from '../../context/globalContext';
import Search from './Search';
import fetchMock from "jest-fetch-mock";
import searchMock from './Search.mock.json';
import * as utils from '../../utils';

fetchMock.enableMocks();

describe('Search page', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('It should return a list of products related to the search', async () => {
        jest
            .spyOn(utils, 'useQuery')
            .mockImplementation(() => new URLSearchParams('?search=Apple'));
        
        fetch.mockResponseOnce(JSON.stringify(searchMock));
        
        render(
            <GlobalProvider>
                <Search />
            </GlobalProvider>
        );

        expect(await waitFor(() => screen.getByRole('list'))).toBeInTheDocument();
    });

    test('It should return an error message', async () => {
        jest
            .spyOn(utils, 'useQuery')
            .mockImplementation(() => undefined);

        render(
            <GlobalProvider>
                <Search />
            </GlobalProvider>
        );

        expect(screen.getByAltText('Error')).toBeInTheDocument();
    });
});