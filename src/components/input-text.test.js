import React from 'react'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import InputText from './input-text'

describe('InputText component', () => {
  const keywords = 'some key word';
  const label = 'keywords';
  let props;
  let component;

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    props = {
      onChange: jest.fn()
    }

    component = shallow(
      <InputText 
          value={keywords} 
          onChange={props.onChange} 
          label={label} />
    )
  })

  it('should render the right way', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render label correctly', () => {
    expect(component).toMatchSnapshot();
    expect(component.find('label').text()).toBe(label+':');
  }); 

  it('should call onChange function', () => {
    component = mount(
      <InputText 
        value={keywords} 
        onChange={props.onChange} 
        label={label} />
    );

    component.find('input').simulate('change');

    expect(props.onChange).toHaveBeenCalled();
  });

  it('should change text', () => {
    component = mount(
      <InputText 
        value={keywords} 
        onChange={props.onChange} 
        label={label} />
    );

    component.find('input').simulate('change');

    expect(component.find('input').prop("value")).toBe(keywords);
  })
})