// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from "./Display"

describe('Display component', () => {

  it('should default to being open', () => {
    const { getByText } = render(<Display />);


    expect(getByText(/open/i)).toBeInTheDocument();
  });

  it('should default to being unlocked', () => {
    const { getByText } = render(<Display />);

    expect(getByText(/unlocked/i)).toBeInTheDocument();
  });

  it('should display closed if closed props are true', () => {
    const { getByText } = render(<Display closed={true}/>);

    expect(getByText(/closed/i)).toBeInTheDocument();
  });

  it('should display locked if locked props are true', () => {
    const { getByText } = render(<Display locked={true} />);

    expect(getByText(/Locked/)).toBeInTheDocument();
  });

  it('should have the red-led class when locked', () => {
    const { getByText } = render(<Display locked={true} />);

    expect(getByText(/Locked/)).toHaveClass('red-led');
  })

  it('should have the red-led class when closed', () => {
    const { getByText } = render(<Display closed={true} />);

    expect(getByText("Closed")).toHaveClass('red-led');
  })

  it('should have the green-led class when unlocked', () => {
    const { getByText } = render(<Display locked={false} />);

    expect(getByText(/Unlocked/)).toHaveClass('green-led');
  })

  it('should have the red-led class when open', () => {
    const { getByText } = render(<Display closed={false} />);

    expect(getByText("Closed")).toHaveClass('red-led');
  })
  
});