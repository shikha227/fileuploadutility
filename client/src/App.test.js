import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';
import Upload from './componenet/Report/file upload.js';
describe('Upload', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Upload debug />);
  
    expect(component).toMatchSnapshot();
  });
it('button click should hide component', () => {
    const component = shallow(<Upload  />);
      const instance = component.instance();
    component
      .find('button')
      .simulate('click');

          expect(instance.state.error).toEqual('Please select file');

  });


});
