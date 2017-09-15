export  function createStore(reducer, initialState) {
	let state = initialState;
	let callbacks = [];

	const getState = () => state;
	const dispatch = action => {
		state = reducer(state,action);
		callbacks.forEach(func => func())
	};

	const subscribe = (cb) => {
		callbacks.push(cb);
		return () => callbacks.filter(callback => callback !== cb);
	}


	dispatch({});
	return {getState,dispatch,subscribe};
}