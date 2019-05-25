import React from 'react';
import PropTypes from 'prop-types';

class TextInputGroup extends React.Component {
	static propTypes = {
		label: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
	};

	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const {label, name, type, placeholder, value, onChange} = this.props;
		return (
			<div className='form-group'>
				<label htmlFor={name}>Name</label>
				<input type={type} name={name} className="form-control form-control-lg" placeholder={placeholder} value={value} onChange={onChange} required/>
			</div>
		);
	}
}

export default TextInputGroup;