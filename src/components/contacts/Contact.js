import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './../../context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Contact extends Component{

    state = {
        showContactInfo: false
    };

    onDeleteClick = async (id, dispatch)=>{
        await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type:'DELETE_CONTACT', payload: id});
    };

    render(){
    	const {id, name, email, phone} = this.props.contact;

        return(

            <Consumer>{
                value => {
                    const {dispatch} = value;

                    return (
                        <div className='card card-body mb-3'>
                            <h4>
                                {name} 
                                <i 
                                    style = {{ cursor: 'pointer'}}
                                    className="fa fa-sort-down ml-2" 
                                    onClick = { ()=> this.setState({ showContactInfo: !this.state.showContactInfo})}>
                                </i>
                                <i 
                                    style = {{cursor: 'pointer', color: 'red', float: 'right'}}
                                    className="fa fa-times"
                                    onClick = {this.onDeleteClick.bind(this, id, dispatch)}>           
                                </i>
                                <Link to={`contact/edit/${id}`}>
                                    <i className="fas fa-pencil-alt" style={{cursor: 'pointer', color: 'black', float: 'right', marginRight:'1rem'}}></i>
                                </Link>
                            </h4>
                            {this.state.showContactInfo ? (<ul className='list-group'>
                                <li className='list-group-item'>Email: {email}</li>
                                <li className='list-group-item'>Phone: {phone}</li>
                            </ul>) : null}
                            
                        </div>
                    );
                }
            }</Consumer>
        )
    }
};

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
}

export default Contact;