import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '../Sidebar';
import React from 'react';
import { renderWithTranslation } from '@shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar test suite', () => {
  test('should render correctly', () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should toggle sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar_toggle');

    expect(sidebar).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('Collapsed');
  });
});
