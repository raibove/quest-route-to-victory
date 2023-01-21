import React from 'react';
import { mount } from 'enzyme';
import PrivateRoute from './components/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import Settings from "./components/Settings";
import Editor from "./components/Editor";

describe('PrivateRoute configuration for settings page', () => {
    test('unauthenticated users cannot access settings page', async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/settings']}>
          <PrivateRoute currentUser={null} path="/settings" component={Settings} />
        </MemoryRouter>
      );
      expect(wrapper.find(Settings)).toHaveLength(0);
    });

    test('authenticated users can access settings page', async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/settings']}>
          <PrivateRoute currentUser={{username:"test", email:"test@mail.com"}} path="/settings" component={Settings} />
        </MemoryRouter>
      );
      expect(wrapper.find(Settings)).toHaveLength(1);
    });
});


describe('PrivateRoute configuration for settings page', () => {
    test('unauthenticated users cannot access editor page', async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/editor']}>
          <PrivateRoute currentUser={null} path="/editor" component={Editor} />
        </MemoryRouter>
      );
      expect(wrapper.find(Editor)).toHaveLength(0);
    });

    test('authenticated users can access editor page', async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/editor']}>
          <PrivateRoute currentUser={{username:"test", email:"test@mail.com"}} path="/editor" component={Editor} />
        </MemoryRouter>
      );
      expect(wrapper.find(Editor)).toHaveLength(1);
    });
});