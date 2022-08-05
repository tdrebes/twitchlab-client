/* eslint-disable testing-library/no-unnecessary-act */
import {render, cleanup, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import axios from 'axios';
import UrlTable from './UrlTable.jsx'

jest.mock('axios');

afterEach(cleanup);

const urls = [{id: 1, url: "http://example.com/"}, {id: 2, url: "http://example2.com/"}];
const data = {data: {urls}};

test('renders url table', async () => {
    axios.get.mockResolvedValue(data)
    await act(async () => {
        render(<UrlTable/>)
    })
    const titleElement = screen.getByText(/http:\/\/example.com\//i);
    expect(titleElement).toBeInTheDocument();
});
