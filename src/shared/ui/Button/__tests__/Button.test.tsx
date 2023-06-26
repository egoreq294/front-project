import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from '../Button';
import React from 'react';

describe('Button test suite', () => {
  test('should render correctly', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('should render correctly with clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('Clear');
  });
});
