import React, {useState, useEffect, useReducer} from 'react';

const INITIAL_STATE = {
    user:null,
    searchQuery: 'Bret'
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return{...state, user:action.payload}
        case 'SET_SEARCH_QUERY': 
        return {...state, searchQuery: action.payload}
        default:
            return state;
    }
}
const setUser = user => ({
    type: 'SET_USER',
    payload:user
});

const setSearchQuery = queryString = ({
    type:'SET_SEARCH_QUERY',
    payload:queryString
})
const UseReducerExample = () => {
    // const [user, setUser] = useState(null); //useState vs useReducer
    // const[searchQuery, setSearchQuery] = useState('Bret'); //useState vs useReducer
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    useEffect(() => {
        if(searchQuery.length > 0) {
            const fetchFunc = async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
                const resJson = await response.json();
                dispatch(setUser(resJson[0]));
            }
            fetchFunc();
        }
    }, [searchQuery])
    return (
        <div>
        <input onChange={event => dispatch(setSearchQuery(event.target.value))}/>
        </div>
    )
}


export default UseReducerExample;