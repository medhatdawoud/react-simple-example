import React from 'react'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Dropdown from './dropdown'

describe('Dropdown component', () => {
  let options;
  let props;
  let component;
  const label = 'models';
  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    options = [
      { value: 'jeep', label: 'Jeep'},
      { value: 'tesla', label: 'Tesla'}
    ];
    props = {
      onChange: jest.fn()
    }

    component = shallow(
      <Dropdown 
        onChange={props.onChange} 
        label={label} 
        placeholder="- All Models -"  
        options={options} 
        selectedOption={options[0]} />
    )
  })

  it('should render the right way', () => {
    expect(component).toMatchSnapshot()
  });

  it('should render label correctly', () => {
    expect(component).toMatchSnapshot()
    expect(component.find('label').text()).toBe(label+':');
  });

  it('should call onChange function', () => {
    component = mount(
      <Dropdown 
        onChange={props.onChange} 
        label={label} 
        placeholder="- All Models -"  
        options={options} 
        selectedOption={options[0]} />
    );

    component.find('select').simulate('change');

    expect(props.onChange).toHaveBeenCalled();
  })
})