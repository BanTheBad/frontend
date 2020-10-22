import React from 'react';
import { render } from '@testing-library/react';
import VictimCard from './VictimCard';

describe('VictimCard', () => {
  test('renders VictimCard component', () => {
    render(<VictimCard />);
  });
});
