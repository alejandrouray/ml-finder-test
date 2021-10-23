import React from "react";
import { Route, Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { GlobalProvider } from '../../context/globalContext';
import { createMemoryHistory } from 'history';
import Product from './Product';
import fetchMock from "jest-fetch-mock";
import productMock from './Product.mock.json';
import NotFound from '../NotFound/NotFound'

fetchMock.enableMocks();

describe('Product page', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('It should return product data', async () => {
        const history = createMemoryHistory();
        
        history.push('items/MLA735941139');
        fetch.mockResponseOnce(JSON.stringify(productMock));

        render(
            <Router history={history}>
                <GlobalProvider>
                    <Route path="/items/:id">
                        <Product />
                    </Route>
                </GlobalProvider>
            </Router>
        );

        expect(await waitFor(() => screen.getByRole('main'))).toBeInTheDocument();

        screen.getByText(productMock.item.title);
    });

    test('It should redirect to the NotFound page', async () => {
        const history = createMemoryHistory();
        
        history.push('/items/MLAERROR');
        fetch.mockResponseOnce(JSON.stringify({ item: false }));

        render(
            <Router history={history}>
                <GlobalProvider>
                    <Route path="/items/:id">
                        <Product />
                    </Route>
                    <Route path="/notFound">
                        <NotFound />
                    </Route>
                </GlobalProvider>
            </Router>
        );
        
        expect(await waitFor(() => screen.getByAltText('Not Found'))).toBeInTheDocument();
        expect(history).toHaveLength(3);
    });
});