import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '../Sidebar';
import React from 'react';
import { componentRender } from '@shared/lib/tests/componentRender/componentRender';

describe('Sidebar test suite', () => {
  test('should render correctly', () => {
    const { container } = componentRender(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should toggle sidebar', () => {
    componentRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar_toggle');

    expect(sidebar).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('Collapsed');
  });
});
