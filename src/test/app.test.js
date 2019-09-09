import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
// ^renders the markup

import App from '../components/app';
import Counter from '../components/app';

describe('<Counter/>', () => {

  it('starts at 0', () => {
    let counter = mount(<Counter />);
    let count = counter.find('h4');
    // button.simulate('click');
    expect(counter.find('h4').text()).toContain('0');
  });

  it('goes up on more', () => {
    let counter = mount(<Counter />);
    // let count = counter.find('h4');
    let button = counter.find('#more')
    button.simulate('click');
    expect(counter.find('h4').text()).toContain('1');
  });

  it('goes down on less', () => {
    let counter = mount(<Counter />);
    // let count = counter.find('h4');
    let button = counter.find('#less')
    button.simulate('click');
    expect(counter.find('h4').text()).toContain('-1');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Assert state changes properly
// Assert that state is being transferred to the DOM


// Assert DOM stability via snapshot testing.
// i.e. take a snapshot, change the markup/jsx, assert failure. Put it back to make it all good.