import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'

const AddContact = () => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[num, setNum] = useState('')

      const contacts = useSelector(state => state)
      const dispatch = useDispatch()

      const history = useHistory()
    
     const handleSubmit = (e)=>{
         e.preventDefault()
         const checkMail = contacts.find( (contact) => contact.email === email && email)
         const checkNum = contacts.find( (contact) => contact.num === num && num)
         console.log(checkNum)
         
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
            id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : contacts.length + 1 ,
            name,
            email,
            num
        }

        dispatch({type: "ADD_CONTACT", payload: data})
        toast.success("User Added Successfully")
        
        history.push('/')
     }
     
     return(
         <>
         <div className='container'>
             <div className='row'>
                <h1 className="display-3 text-center">Add Student</h1>
                <div className="col-md-6 my-5 shadow mx-auto p-5 ">
                    <form onSubmit={handleSubmit}>
                        <div className='form-group my-3'>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control" />
                        </div>
                        <div className='form-group my-3'>
                            <input type="Email" value = {email} onChange= { (e) => setEmail(e.target.value)}placeholder="Email" className="form-control" />
                        </div>
                        <div className='form-group my-3'>
                            <input type="number" value={num} onChange={(e) => setNum(e.target.value)}placeholder="Number" className="form-control" />
                        </div>
                        <div className="form-group text-center">
                            <input type="submit"  value="Add Student" className="btn btn-block btn-dark" />
                        </div>

                    </form>
                </div>

             </div>

         </div>
         </>
     )
}

export default AddContact