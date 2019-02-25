import React, {
  Component
} from 'react'

export default class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({value});
    this.props.onChange(value);
  }

  render() {
    return (<div className="form-group">
      <label>{this.props.label}:</label>
      <input type="text" onChange={this.handleChange} value={this.props.value} className="form-control" />
    </div>)
  }
}