const contact = (state, action) => {
	switch (action.type) {
		case 'ADD_CONTACT':
			return {
				id: action.id,
				photo: action.photo,
				name: action.name,
				phone: action.phone,
				email: action.email,
				groups: action.groups,
			};
		// case 'TOGGLE_TODO':
		// 	if (state.id !== action.id) {
		// 		return state
		// 	}
		// 	return {
		// 		...state,
		// 		completed: !state.completed
		// 	};
		default:
			return state
	}
};

const contacts = (state = [], action) => {
	switch (action.type) {
		case 'ADD_CONTACT':
			return [
				...state,
				contact(undefined, action)
			];
		// case 'TOGGLE_TODO':
		// 	return state.map(t =>
		// 		contact(t, action)
		// 	);
		default:
			return state
	}
};

export default contacts