import React from 'react';
import {Consumer} from './../../context';
import uuid from 'uuid';
import TextInputGroup from './../layout/TextInputGroup';

class AddContact extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	// constructor(props) {
	// 	super(props);
	// }

	state = {
		name: '',
		email: '',
		phone: '',
		errors: {},
	};

	onSubmit = (dispatch, event) => {
		event.preventDefault();
		const {name, email, phone} = this.state;

		// Check For Errors
	    if (name === '') {
	      this.setState({ errors: { name: 'Name is required' } });
	      return;
	    }

	    if (email === '') {
	      this.setState({ errors: { email: 'Email is required' } });
	      return;
	    }

	    if (phone === '') {
	      this.setState({ errors: { phone: 'Phone is required' } });
	      return;
	    }

		const newContact ={
			id: uuid(),
			name,
			email,
			phone
		};
		dispatch({type:'ADD_CONTACT', payload:newContact});
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {},
		});
	};

	onChange = e => this.setState({[e.target.name]: e.target.value});

	render() {

		const {name, email, phone, errors} = this.state;
		return(
			<Consumer>{
				value => {
					const {dispatch} = value;
					return(
						<div className='card mb-3'>
							<div className='card-header'> Add Contact </div>
							<div className='card-body'>
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInputGroup label="Name" name="name" type="text" placeholder="Enter Name" value={name} onChange={this.onChange} error={errors.name}/>
									<TextInputGroup label="Email" name="email" type="email" placeholder="Enter Email" value={email} onChange={this.onChange} error={errors.email}/>
									<TextInputGroup label="Phone" name="phone" type="phone" placeholder="Enter Phone" value={phone} onChange={this.onChange} error={errors.phone}/>
									<div className="invalid-feedback">This is </div>
									<input type="submit" value='Add Contact' className='btn btn-light btn-block'/>
								</form>
							</div>
						</div>
					);
				}
			}</Consumer>
		);

		// return (
			
		// );
	}
};

export default AddContact;
