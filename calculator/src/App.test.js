import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configure,mount,shallow,render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("validate calculator component",()=>{
    const calculatorCopm = shallow(<App/>)
    expect(calculatorCopm).toMatchSnapshot()
})
