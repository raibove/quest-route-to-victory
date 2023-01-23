import React from 'react';
import { mount } from 'enzyme';
import App from "./components/App";
import { MemoryRouter } from 'react-router-dom';
import Settings from "./components/Settings";
import Editor from "./components/Editor";
import {store} from "./store";
import { Provider } from "react-redux";


describe('PrivateRoute configuration for settings page', () => {
    test('unauthenticated users cannot access settings page', async () => {

      const payload = {
        errors: "email or password: is invalid",
      }

      store.dispatch({ type: 'REGISTER', payload, error:true });

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/settings']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Settings)).toHaveLength(0);
    });

    test('authenticated users can access settings page', async () => {

      const payload = {
        user: {
          username: "test-user",
          email: "test-user@example.com",
          token: "some-token",
          role: "user"
      }
      }

      store.dispatch({ type: 'REGISTER', payload, error: null});

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/settings']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Settings)).toHaveLength(1);
    });
});


describe('PrivateRoute configuration for settings page', () => {
    test('unauthenticated users cannot access editor page', async () => {
      const payload = {
        errors: "email or password: is invalid",
      }
    
      store.dispatch({ type: 'REGISTER', payload, error:true });
    
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/editor']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Editor)).toHaveLength(0);
    });

    test('authenticated users can access editor page', async () => {

      const payload = {
        user: {
          username: "test-user",
          email: "test-user@example.com",
          token: "some-token",
          role: "user"
      }
      }

      store.dispatch({ type: 'REGISTER', payload, error: null });

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/editor']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Editor)).toHaveLength(1);
    });
});