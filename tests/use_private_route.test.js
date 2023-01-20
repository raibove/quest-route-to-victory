import React from 'react';
import { mount } from 'enzyme';
import PrivateRoute from './components/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import Settings from "./components/Settings";

describe('PrivateRoute', () => {
    test('unauthenticated users cannot access settings page', async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/settings']}>
          <PrivateRoute currentUser={null} path="/settings" component={Settings} />
        </MemoryRouter>
      );
      expect(wrapper.find(Settings)).toHaveLength(0);
    });
});


describe('PrivateRoute', () => {
    test('unauthenticated users cannot access settings page', async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute currentUser={null} path="/settings" component={Settings} />
        </MemoryRouter>
      );
      expect(wrapper.find(Settings)).toHaveLength(0);
    });
});



describe('PrivateRoute', () => {
    test('authenticated users can access settings page', async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute currentUser={{username:"test", email:"test@mail.com"}} path="/settings" component={Settings} />
        </MemoryRouter>
      );
      expect(wrapper.find(Settings)).not.toHaveLength(0);
    });
});