import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TextInputGroup extends React.Component {
	static propTypes = {
		label: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
		error: PropTypes.string,
	};

	render() {
		const {label, name, type, placeholder, value, onChange, error} = this.props;
		return (
			<div className='form-group'>
				<label htmlFor={name}>{label}</label>
				<input type={type} name={name} className={classnames('form-control form-control-lg', {'is-invalid': error})} placeholder={placeholder} value={value} onChange={onChange} />
				{error && <div className="invalid-feedback">{error}</div>}
			</div>
		);
	}
}

export default TextInputGroup;