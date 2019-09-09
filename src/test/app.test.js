import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
// ^renders the markup

import App from '../components/app';
import Counter from '../components/app';

// return (
//   <div>
//     <button onClick={this.handleButtonClickDown}>LESS?</button>
//     <h4 className={this.state.polarity}>{this.state.counter}</h4>
//     {/* className is JSX for class */}
//     <button onClick={this.handleButtonClickUp}>MORE!</button>
//   </div>
// );

describe('<Counter />', ()=>{
  it('is alive at start',()=>{
    let component=shallow(<Counter />);
    expect(component.find('h4').exists()).toBeTruthy();
  });

  it('is alive at start',()=>{
    let component=shallow(<Counter />);
    expect(component.find('h4').exists()).toBeTruthy();
  });


})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('changes state properly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('transfers state to DOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('changes state properly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Assert state changes properly
// Assert that state is being transferred to the DOM


// Assert DOM stability via snapshot testing.
// i.e. take a snapshot, change the markup/jsx, assert failure. Put it back to make it all good.