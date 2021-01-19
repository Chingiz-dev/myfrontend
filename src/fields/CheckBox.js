import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss'

class CheckBox extends React.Component {
  static propTypes = {
    hasError: PropTypes.bool,
    id: PropTypes.string.isRequired,
    indeterminate: PropTypes.bool,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'switch']),
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    label_size: PropTypes.number,
    checkbox_size: PropTypes.number,
    name: PropTypes.string,
    register: PropTypes.func,
    color: PropTypes.string,
    margin_left: PropTypes.string

  };
  static defaultProps = {
    hasError: false,
    indeterminate: undefined,
    type: 'default',
  };

  componentDidMount() {
    // Apply the indeterminate attribute of the checkbox input
    this.selector.indeterminate = this.props.indeterminate;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.selector.indeterminate = this.props.indeterminate;
    }
  }

  render() {
    const { id, label, type, indeterminate, hasError, ...inputProps } = this.props;
    const checkboxClassname = `
      m-checkbox
      ${type === 'switch' && 'm-checkbox--switch'}
      ${hasError && 'm-checkbox--has-error'}
    `;

    const inputClassname = `
      m-checkbox__input
      ${type === 'switch' && 'm-checkbox--switch__input'}
      ${hasError && 'm-checkbox--has-error__input'}
    `;

    const labelClassname = `
      m-checkbox__label
      ${type === 'switch' && 'm-checkbox--switch__label'}
    `;

    return (
        <div className={checkboxClassname}>
          <input
              type="checkbox"
              style={{width: this.props.checkbox_size, height: this.props.checkbox_size}}
              className={inputClassname}
              ref={el => (this.selector = el)}
              id={id}
              name={this.props.name}
              checked={this.props.checked}
              onChange={() => this.props.onChange(this.props.checked)}
              {...inputProps}
          />
          <label
              className={labelClassname}
              style={{
                fontSize: this.props.label_size,
                color: this.props.color,
                marginLeft: this.props.margin_left
              }}
              htmlFor={id}
          >
            {label}
          </label>
        </div>
    );
  }
}

export default CheckBox;

// ReactDOM.render(
//     <div className="content">
//       <h1>ReactJS <span>checkbox</span> component</h1>
//       <Checkbox id="unchecked" label="Unchecked" />
//       <Checkbox id="checked" label="Checked" checked />
//       <Checkbox id="indeterminate" label="Indeterminate" indeterminate />
//       <Checkbox id="switch" label="Switch" type="switch" />
//       <Checkbox id="hasError" label="Has error" hasError />
//       <Checkbox id="disabled" label="Disabled" disabled />
//     </div>,
//     document.getElementById('container')
// );

