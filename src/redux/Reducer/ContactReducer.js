const intialState = [
    
]

const ContactReducer = (state=intialState,action) =>{ 
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state
        case "UPDATE_CONTACT":
            const updated = state.map( (contact) => contact.id === action.payload.id ? action.payload : contact)
            state = updated
            return state
        case "DELETE_CONTACT":
            const filterContact = state.filter( contact => contact.id !== action.payload && contact)
            state = filterContact
            return state
        default:
            return state
    }
}

export default ContactReducer