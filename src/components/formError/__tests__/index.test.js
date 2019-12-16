import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import FormError from '../index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('For no Error', () => {
  it('should not render the component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <FormError />
      </Provider>
    );
    expect(wrapper.find('small').exists()).toBeFalsy();
  });
});

describe('For Error', () => {
  it('should render where there is an error', () => {
    const error = { message: 'invalid shit' };

    const wrapper = mount(
      <Provider store={store}>
        <FormError error={error} />
      </Provider>
    );
    expect(wrapper.find('small').exists()).toBeTruthy();
  });
});
