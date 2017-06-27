export default function createNamedWrapperReducer(reducer, reducerName) {
    return (state, action) => {
        const {name} = action;
        const initializationCall = state === undefined;
        
        if(name !== reducerName && !initializationCall) {
            return state;
        }

        return reducer(state, action);
    };
}