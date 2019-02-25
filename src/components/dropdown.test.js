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
    const component = shallow(<Dropdown />);
    expect(component).toMatchSnapshot()
  })

  it('should render label correctly', () => {
    expect(component).toMatchSnapshot()
  });

  it('should render label correctly', () => {
    expect(component).toMatchSnapshot()
    expect(component.find('label').text()).toBe(label+':');
  });

  it('should render options correctly', () => {
    expect(component).toMatchSnapshot()
  });

  it('should handleChange', () => {
    component = mount(
      <Dropdown 
        onChange={props.onChange} 
        label={label} 
        placeholder="- All Models -"  
        options={options} 
        selectedOption={options[0]} />
    );

    component.find('Select').prop('onChange')();

    expect(props.onChange).toHaveBeenCalled();
  })
})