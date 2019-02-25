import React, { Component } from 'react';
import Select from 'react-select';

export default class Dropdown extends Component {
  handleChange = (selectedOption) => {
    this.props.onChange(selectedOption);
  }

  render() {
    const { options, selectedOption } = this.props;
    
    return <div className="form-group">
      <label>{this.props.label}:</label>
      <Select
        placeholder={this.props.placeholder}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        disabled={!this.options}
      />
    </div>;
  }
}
