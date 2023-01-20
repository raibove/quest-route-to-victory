import React from 'react';
import { mount } from 'enzyme';
import PrivateRoute from './components/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import Settings from "./components/Settings";
import Login from "./components/Login";


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
    test('unauthenticated users cannot access settings page', async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute currentUser={null} path="/login" component={Login} />
        </MemoryRouter>
      );
      expect(wrapper.find(Settings)).not.toHaveLength(0);
    });
});