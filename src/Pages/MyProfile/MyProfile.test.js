import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import MyProfile from './MyProfile';

it('Profile should render', () => {
  const profile = render(
    <Provider store={store}>
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>
    </Provider>,
  );
  expect(profile).toMatchSnapshot();
});
