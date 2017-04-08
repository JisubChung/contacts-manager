// we're creating a reducer whose initial state is an empty array of contacts
const contacts = (state = [], action) => {
	switch (action.type) {
		case 'ADD_CONTACT':
			console.log('add_contact');
			return [
				...state,
				{
					id: action.id,
					words: action.contact,
					completed: false
				}
			];
		case 'REMOVE_CONTACT':
			return state;
		case 'EDIT_CONTACT':
			return state;
		default:
			return state
	}
};

export default contacts