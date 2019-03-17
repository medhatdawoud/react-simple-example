import React from 'react';
import InputText from './input-text';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('InputText Component', () => {
  let component;
  let props;
  let label = 'keywords';
  let keywords = 'this is some keyword';

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    props = {
      onChange: jest.fn()
    }
    
    component = shallow(
      <InputText 
        label={label}
        value={keywords}
        onChange={props.onChange} />
    );
  })

  it('Should render the right way', ()=> {
    expect(component).toMatchSnapshot();
  });

  it('should render the label the right way', ()=> {
    expect(component.find('label').text()).toBe(label+':');
  });

  it('should call the onChange function', () => {
    let mountedComponent = mount(
      <InputText 
        label={label}
        value={keywords}
        onChange={props.onChange} />
    );

    mountedComponent.find('input').simulate('change');

    expect(props.onChange).toHaveBeenCalled();
  });

  it('should change the value of the input onChange', () => {
    keywords = 'shawky';
    let mountedComponent = mount(
      <InputText 
        label={label}
        value={keywords}
        onChange={props.onChange} />
    );

    mountedComponent.find('input').simulate('change');

    expect(mountedComponent.find('input').prop('value')).toBe('shawky');
  })
})