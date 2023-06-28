import { fireEvent, screen } from '@testing-library/react';
import { Counter } from '../Counter';
import React from 'react';
import { componentRender } from '@shared/lib/tests/componentRender/componentRender';

describe('Counter test suite', () => {
  test('should render correctly', () => {
    const { container } = componentRender(<Counter />);

    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should increment counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const counter = screen.getByTestId('counter');
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');

    expect(counter).toBeInTheDocument();
    expect(counterValue).toBeInTheDocument();
    expect(counterValue).toHaveTextContent('10');
    expect(incrementButton).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('11');
  });

  test('should decrement counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const counter = screen.getByTestId('counter');
    const counterValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');

    expect(counter).toBeInTheDocument();
    expect(counterValue).toBeInTheDocument();
    expect(counterValue).toHaveTextContent('10');
    expect(decrementButton).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('9');
  });
});
