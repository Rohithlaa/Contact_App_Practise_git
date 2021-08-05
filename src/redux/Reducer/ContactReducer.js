const intialState = [
    {
        id:1,
        name: "Rohith",
        email:"k.rohithkumar27@gmail.com",
        num: "9441761524"
    },
    {
        id:2,
        name: "Rohith",
        email:"k.rohithkumar27@gmail.com",
        num: "8555026211"
    } 
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