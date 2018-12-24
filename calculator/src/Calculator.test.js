import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Modules/Calculator';

import {configure,mount,shallow,render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("validate calculator component",()=>{
    const calculatorCopm = shallow(<Calculator/>)
    // expect(calculatorCopm).toMatchSnapshot()
    expect(calculatorCopm.find('.mainContainer')).toBeDefined();
    expect(calculatorCopm.find('.resultRow')).toBeDefined();

})
