// Test away
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from "./Dashboard"

describe('Dashboard component', () => {

  it('should render without crashing', () => {
    const { getByTestId } = render(<Dashboard />)

    expect(getByTestId(/dashboard-component/i)).toBeInTheDocument();
  });

  it('should render the display component', () => {
    const { getByTestId } = render(<Dashboard />)

    expect(getByTestId(/display/i)).toBeInTheDocument();
  });

  it('should render the control component', () => {
    const { getByTestId } = render(<Dashboard />)

    expect(getByTestId(/control/i)).toBeInTheDocument();
  });

})

