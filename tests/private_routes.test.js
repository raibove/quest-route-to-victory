import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivateRoute from './PrivateRoute';

describe('PrivateRoute', () => {
  test('renders the component if the user is authenticated', () => {
    const Component = () => <div>Protected Content</div>;
    const currentUser = { isAuthenticated: true };
    render(<PrivateRoute currentUser={currentUser} component={Component} />);
    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });

  test('does not render the component if the user is not authenticated', () => {
    const Component = () => <div>Protected Content</div>;
    const currentUser = null;
    render(<PrivateRoute currentUser={currentUser} component={Component} />);
    expect(screen.queryByText('Protected Content')).toBeNull();
  });
});
