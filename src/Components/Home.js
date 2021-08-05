import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {
    const contacts = useSelector(state => state)
    const dispatch = useDispatch()

   const  deleteContact = (id) => {
        dispatch( {type: "DELETE_CONTACT" , payload: id})
        toast.success("User Deleted Successfully")
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className="col-md-sm-lg-12 my-5 text-end">
                    <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
                </div>
                <div className="col-md-8 mx-auto">
                    <table className="table table-hover">
                        <thead className="bg-dark text-center text-white ">
                            <tr>
                                <th>#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>

                            </tr>
                            
                        </thead>
                        <tbody>
                            { contacts.map((contact,id) => (
                                <tr key={id} >
                                    <td>{id + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.num}</td>
                                    <td> 
                                        <Link to={`/edit/${id + 1}`}> 
                                         <input type='button' value='Edit' className='btn btn-primary btn-sm mx-4' />
                                        </Link>
                                        <button type='button' onClick = { () => deleteContact(contact.id)} className="btn btn-danger btn-sm mx-2"> 
                                          Delete
                                        </button>
                                    </td>
                                    
                                       
                                    
                                
                                </tr>
                            )   
                            )}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default Home