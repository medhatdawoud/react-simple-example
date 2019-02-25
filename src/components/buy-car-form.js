import React, { Component } from 'react'
import Dropdown from './dropdown'
import InputText from './input-text';
import API_Data from '../api.json';

export default class BuyCarForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedBrand:null,
      selectedModel:null,
      keywords: null,
      brands: [],
      models: []
    };
  }

  brands = API_Data.brands.map(brand => ({
    value: brand.toLowerCase(),
    label: brand
  }));

  models = [];

  onBrandChange = (brand) => {
    this.setState({selectedBrand:brand,selectedModel:null});
    this.models = this.models = API_Data.models[brand.value].map(brand => ({
      value: brand.toLowerCase(),
      label: brand
    }));
  } 

  onModelChange = (model) => {
    this.setState({selectedModel:model});
  } 

  resetSearch = () => {
    this.setState({selectedBrand:null,selectedModel:null});
    this.models = [];
  }

  render() {
    const {selectedBrand, selectedModel, keywords} = this.state;
    return (
      <div className="card BuyCarForm">
        <div className="card-header">
          <strong>Buy a car</strong>
          <button class="btn btn-sm btn-info float-right" onClick={this.resetSearch}>reset</button>
        </div>
        <div className="card-body">
          <Dropdown label="Brand" 
                placeholder="- All Brands -" 
                selectedOption={selectedBrand}
                onChange={this.onBrandChange} 
                options={this.brands}/>
          <Dropdown label="Model" 
                placeholder="- select a brand first -" 
                selectedOption={selectedModel}
                onChange={this.onModelChange} 
                options={this.models}/>
          <InputText label="Keywords" />
        </div>
        <div className="card-footer">
          <button className="btn btn-primary btn-block" disabled={!selectedBrand && !selectedModel && !keywords}>Search Cars</button>
        </div>
      </div>
    )
  }
}
