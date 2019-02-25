import React, {
  Component
} from 'react'

export default class InputText extends Component {
  render() {
    return (<div className="form-group">
      <label>{this.props.label}:</label>
      <input type="text" className="form-control" />
    </div>)
  }
}