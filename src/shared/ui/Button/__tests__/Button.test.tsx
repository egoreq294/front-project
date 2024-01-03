import { render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from '../Button';

describe('Button test suite', () => {
  test('should render correctly', () => {
    const { container } = render(<Button>TEST</Button>);
    expect(container).toMatchSnapshot();
  });
  test('should render correctly with TEST children', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('should render Primary Button ', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('Primary');
  });
});
