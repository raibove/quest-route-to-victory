import React from 'react';
import { mount } from 'enzyme';
import PrivateRoute from './components/PrivateRoute';
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
            <PrivateRoute currentUser={{username:"test", email:"test@mail.com"}} path="/settings" component={Settings} />
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
        <MemoryRouter initialEntries={['/editor']}>
          <PrivateRoute currentUser={null} path="/editor" component={Editor} />
        </MemoryRouter>
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
            <PrivateRoute currentUser={{username:"test", email:"test@mail.com"}} path="/editor" component={Editor} />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Editor)).toHaveLength(1);
    });
});