import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';
import axios from 'axios';
import '@testing-library/jest-dom'
import {rest} from "msw"
import {setupServer} from 'msw/node'
import {Search} from "./components";
import { Home, LoginForm,StopWatch,About,Privacy } from "./views";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import {Provider} from 'react-redux';


const searchUrl = `https://pixabay.com/api/?key=446579-0544d1523568f48bffb749e2d&q=car&page=1`;

const server = setupServer(
    rest.get(searchUrl, (req, res, ctx) => {
      return res(ctx.json({key: '446579-0544d1523568f48bffb749e2d'}))
    }),
)
beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  window.localStorage.removeItem('token')
})
afterAll(() => server.close())

const setupSearch = () => {
    const utils = render(<Search />)
    const input = utils.getByLabelText('search-input')
    return {
        input,
        ...utils,
    }
}

test("Test Search Form Pixabay",() =>{
    const { input } = setupSearch()
    fireEvent.change(input, { target: { value: 'car' } })

    expect(input.value).toBe('car')

    const component = renderer.create(
        <Search/>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})

test('stop watch event',() =>{
    const { getByTestId, rerender } = render( <Provider> <StopWatch timerOn={true} /></Provider>)
    fireEvent.click(getByTestId(/start-button/i))
    const component = renderer.create(
        <Provider>  <StopWatch /></Provider>
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})

test('router test',() =>{
    const history = createMemoryHistory()
    const { container, getByText } = render(
        <Router history={history}>
            <App />
        </Router>
    )
    expect(container.innerHTML).toMatch('Pencarian Gambar dari Pixabay')
    fireEvent.click(getByText(/about/i))
    expect(container.innerHTML).toMatch('Ayah dari 3 jagoan')

});