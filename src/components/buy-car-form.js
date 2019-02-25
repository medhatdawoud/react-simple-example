import React, { Component } from 'react'
import Dropdown from './dropdown'
import InputText from './input-text';
import API_Data from '../api.json';

export default class BuyCarForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedBrand:'',
      selectedModel:'',
      keywords: '',
      brands: [],
      models: []
    };

    this.onBrandChange = this.onBrandChange.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
    this.onKeywordsChange = this.onKeywordsChange.bind(this);
  }

  brands = API_Data.brands.map(brand => ({
    value: brand.toLowerCase(),
    label: brand
  }));

  models = [];

  onBrandChange = (brand) => {
    this.setState({selectedBrand : brand, selectedModel : ''});
    this.models = API_Data.models[brand].map(brand => ({
      value: brand.toLowerCase(),
      label: brand
    }));
  } 

  onModelChange = (model) => {
    this.setState({selectedModel:model});
  }
  
  onKeywordsChange = (keywords) => {
    this.setState({keywords});
  }

  resetSearch = () => {
    this.setState({selectedBrand:'',selectedModel:'', keywords:''});
    this.models = [];
  }

  render() {
    const {selectedBrand, selectedModel, keywords} = this.state;
    return (
      <div className="card BuyCarForm">
        <div className="card-header">
          <strong>Buy a car</strong>
          <button className="btn btn-sm btn-link float-right" onClick={this.resetSearch}>reset</button>
        </div>
        <div className="card-body">
          <Dropdown label="Brand" 
                testHook="S1"
                placeholder="- All Brands -" 
                selectedOption={selectedBrand}
                onChange={this.onBrandChange} 
                options={this.brands}/>
          <Dropdown label="Model" 
                testHook="S2"
                placeholder="- select a brand first -" 
                selectedOption={selectedModel}
                onChange={this.onModelChange} 
                options={this.models}/>
          <InputText label="Keywords"
                testHook="T"
                value={keywords} 
                onChange={this.onKeywordsChange}  />
        </div>
        <div className="card-footer">
          <button className="btn btn-primary btn-block" id="B" disabled={!selectedBrand && !selectedModel && !keywords}>Search Cars</button>
        </div>
      </div>
    )
  }
}
