import React, { Component } from 'react';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    const { options, selectedOption, placeholder, testHook } = this.props;
    
    return <div className="form-group">
      <label>{this.props.label}:</label>
      <select className="form-control"
        id={testHook}
        value={selectedOption}
        onChange={this.handleChange}
        disabled={!options.length}>

        <option defaultValue>{placeholder}</option>
        {options.map((op) => (
          <option key={op.value} value={op.value}>{op.label}</option>
        ))}

      </select>
    </div>;
  }
}
