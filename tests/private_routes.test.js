import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivateRoute from './components/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('PrivateRoute', () => {
  test('renders the component if the user is authenticated', () => {
    const Component = () => <div>Protected Content</div>;
    const currentUser = { isAuthenticated: true };
    render(
        <MemoryRouter initialEntries={['/']}>
    <PrivateRoute currentUser={currentUser} component={Component} />
    </MemoryRouter>
    );
    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });

  test('does not render the component if the user is not authenticated', () => {
    const Component = () => <div>Protected Content</div>;
    const currentUser = null;
    render(
        <MemoryRouter initialEntries={['/']}>
    <PrivateRoute currentUser={currentUser} component={Component} />
    </MemoryRouter>
    );
    expect(screen.queryByText('Protected Content')).toBeNull();
  });
});
