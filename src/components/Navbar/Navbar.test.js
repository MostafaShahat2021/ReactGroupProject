import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Navbar from './Navbar';

it('Rockets should render', () => {
  const rockets = render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );
  expect(rockets).toMatchSnapshot();
});
