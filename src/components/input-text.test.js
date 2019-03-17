import React from 'react';
import InputText from './input-text';
import Enzyme, {shallow} from 'enzyme';
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
  })
})