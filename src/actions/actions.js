/*
 action types
  */
// Adds a contact
export const ADD_CONTACT = 'ADD_CONTACT';
// Remove a contact
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
//  Click on a field to edit that piece of information
export const EDIT_CONTACT = 'EDIT_CONTACT';

/*
	other constants
 */
//not sure if this is right...
export const ContactField = {
	NAME: 'NAME',
	PHONE: 'PHONE',
	EMAIL: 'EMAIL'
};


/*
 action creators
  */
export function addContact(contact) {
	return { type: ADD_CONTACT, contact }
}


export function removeContact(contact) {
	return { type: REMOVE_CONTACT, contact }
}


export function CLICK_CONTACT(infoFilter) {
	return { type: EDIT_CONTACT, infoFilter }
}