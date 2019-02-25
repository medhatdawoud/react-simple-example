import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import BuyCarForm from './buy-car-form'

describe('BuyCarForm component', () => {
  let component;

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(()=> {
    component= shallow(
      <BuyCarForm />
    );
  });
  

  it('should render the right way', () => {
    expect(component).toMatchSnapshot();
  });

  it('should change the brand successfully', () => {
    const mockBrand = 'bmw';
    component.instance().onBrandChange(mockBrand);

    expect(component.state('selectedBrand')).toBe(mockBrand);
  });

  it('should not have selected model after select brand', () => {
    const mockBrand = 'bmw';
    component.instance().onBrandChange(mockBrand);

    expect(component.state('selectedModel')).toBe('');
  });

  it('should change the Model successfully', () => {
    const mockModel = {value:'x1', label: 'X1'};
    component.instance().onModelChange(mockModel);

    expect(component.state('selectedModel')).toBe(mockModel);
  });

  it('should change the keywords successfully', () => {
    const mockKeywords = 'test keyword';
    component.instance().onKeywordsChange(mockKeywords);

    expect(component.state('keywords')).toBe(mockKeywords);
  });

  it('should reset all state on calling reset()', () => {
    component.instance().resetSearch();

    expect(component.state('selectedBrand')).toBe('');
    expect(component.state('selectedModel')).toBe('');
    expect(component.state('keywords')).toBe('');
  });

})