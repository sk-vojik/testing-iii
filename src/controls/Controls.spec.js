// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from "./Controls"

describe('<Controls />', () => {

  it('should have a toggle lock/unlock button', () => {
    const { getByText, getByTestId } = render(<Controls />);

    expect(getByTestId('lock-button')).toBeInTheDocument();
  });

  it('should have a toggle closed/open button', () => {
    const { getByText, getByTestId } = render(<Controls />);

    expect(getByTestId('open-button')).toBeInTheDocument();
  });

  it('should change button text when clicked', () => {
    const { getByText, getByTestId } = render(<Controls />);

    const lockbutton = getByTestId('lock-button');
    const closebutton = getByTestId('open-button');
    fireEvent.click(closebutton);
   

    expect(getByText('Closed')).toBeInTheDocument();

  });
  
  
});