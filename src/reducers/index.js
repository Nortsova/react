
import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM,CHECK_ITEM } from '../actions';


export default function reducer(state = [], action) {
	switch(action.type) {
	case ADD_ITEM:
		return [...state, {
			title: action.payload.title,
			id: action.payload.id,
			checked: false
		}];
	case EDIT_ITEM:
		return state.map(item=> {
			if (item.id !== action.payload.id) {
				return item;
			}

		
			return {
				...item,
				title: action.payload.title
			}
		});
	case CHECK_ITEM:
		return state.map(item=> {
			if (item.id !== action.payload.id) {
				return item;
			}

		
			return {
				...item,
				checked: !item.checked
			}
		});
	case DELETE_ITEM: {
		const index = state.findIndex(todo => todo.id === action.payload.id);
		return [
			...state.slice(0, index), 
			...state.slice(index+1)
		];
	}
			
	default: return state;
	}
}

