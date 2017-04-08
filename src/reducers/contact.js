// const contact = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD_CONTACT':
// 			return {
// 				id: action.id,
// 				photo: action.photo,
// 				name: action.name,
// 				phone: action.phone,
// 				email: action.email,
// 				groups: action.groups,
// 			};
// 		default:
// 			return state
// 	}
// };

const contacts = (state = [], action) => {
	switch (action.type) {
		// case 'ADD_CONTACT':
		// 	return [
		// 		...state,
		// 		contact(undefined, action)
		// 	];
		case 'INCREMENT':
			console.log('test');
			return state;
		default:
			return state
	}
};

export default contacts