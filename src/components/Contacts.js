import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {

	state = {
		contacts: [
			{
				id: 1,
				name: 'John Doe',
				email: 'jdoe@gmail.com',
				phone: '8985616407'
			},
			{
				id: 2,
				name: 'Charan',
				email: 'charan@gmail.com',
				phone: '8985893407'
			},
			{
				id: 3,
				name: 'Test',
				email: 'test@gmail.com',
				phone: '8988893407'
			}
		]
	};

	deleteContact = (id)=>{
		const {contacts} = this.state;
		const newContacts = contacts.filter(contact => contact.id !== id);
		this.setState({contacts: newContacts});
	}

    render() {

    	const {contacts} = this.state;

        return (
            <React.Fragment>
            {
        		contacts.map((contact)=> 
            	<Contact
            		key = {contact.id} 
            		contact = {contact} 
            		deleteClickHandler = {this.deleteContact.bind(this, contact.id)}/>

            	)
        	}
            </React.Fragment>
        );
    }
}

export default Contacts;