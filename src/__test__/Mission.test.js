import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Mission from '../Pages/Mission/Mission';

it('Mission should render', () => {
  const mission = render(
    <Provider store={store}>
      <BrowserRouter>
        <Mission />
      </BrowserRouter>
    </Provider>,
  );
  expect(mission).toMatchSnapshot();
});
