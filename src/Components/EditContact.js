import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditContact = () => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[num, setNum] = useState('')
    const {id} = useParams()
    // console.log(useParams())

    const contacts = useSelector(state => state)
    //  console.log(id)
    //  console.log(contacts.map(contact => contact.id))
    const validId = contacts.find( contact => contact.id === parseInt(id))
    console.log(validId)
    const dispatch = useDispatch()
    const history = useHistory()
    

    useEffect( () => {
        if(validId) {
             setName(validId.name)
             setEmail(validId.email)
             setNum(validId.num)
        }
    }, [validId])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const checkMail = contacts.find( (contact) => contact.id !== parseInt(id) && contact.email === email && email)
        const checkNum = contacts.find( (contact) => contact.id !== parseInt(id) && contact.num === num && num)
        // console.log(checkNum)
        
        if(email==="" || name==="" || num ===""){
            return toast.warning("Please fill all the fields!")
        }
        if(checkMail){
            return toast.error("This mail is already Exists!")
        }
        if(checkNum){
           return toast.error("This Number is already Exists!")
       }
       
       const data = {
           id: parseInt(id),
           name,
           email,
           num
       }
    //    console.log(data)

       dispatch({type: "UPDATE_CONTACT", payload: data})
       toast.success("User Updated Successfully")
       
       history.push('/')
    }

 return(
     <>
       <div className="container">
           { validId ? (
               <>
                   <div className="row">
               <h1 className="display-3 text-center ">Edit Contact {id}</h1>
             <div className="col-md-6 my-5 shadow  mx-auto p-5">
                 <form onSubmit={handleSubmit}>
                     <div className=" my-3">
                         <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control"/>

                     </div>
                     <div className="form-group my-3">
                         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email" className="form-control"/>
                     </div>
                     <div className="form-group my-3">
                         <input type="number" value={num} onChange={ (e) => setNum(e.target.value)} placeholder="Number" className="form-control"/>
                     </div>
                     <div className="form-group ">
                        <input type="submit" value="Update Contact" className="btn btn-dark btn-md"/>
                        <Link to="/" >
                         <input type="Submit" value="Cancel" className="btn btn-danger btn-md mx-3 " />
                         </Link>
                     </div>
                     
                 </form>

             </div>
           </div>
               </>
           ): (<h1>Student with  id {`${id}`} Not found</h1>)}
          

       </div>
     </>
 )
}

export default EditContact