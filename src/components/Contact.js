import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component{

    state = {
        showContactInfo: false
    };

    onDeleteClick = ()=>{
        this.props.deleteClickHandler();
    };

    render(){
    	const {name, email, phone} = this.props.contact;

        return(
            <div className='card card-body mb-3'>
                <h4>
                    {name} 
                    <i 
                        style = {{ cursor: 'pointer', marginLeft: 10}}
                        className="fa fa-sort-down" 
                        onClick = { ()=> this.setState({ showContactInfo: !this.state.showContactInfo})}>
                    </i>
                    <i 
                        style = {{cursor: 'pointer', color: 'red', float: 'right'}}
                        className="fa fa-times"
                        onClick = {this.onDeleteClick}>
                        
                    </i>
                </h4>
                {this.state.showContactInfo ? (<ul className='list-group'>
                    <li className='list-group-item'>Email: {email}</li>
                    <li className='list-group-item'>Phone: {phone}</li>
                </ul>) : null}
                
            </div>
        )
    }
};

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired,
}

export default Contact;