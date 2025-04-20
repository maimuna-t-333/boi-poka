import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/AddToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {

    const {id}=useParams();
    const bookID=parseInt(id)
    const data=useLoaderData();
    const singleBook=data.find(book=>book.bookId===bookID)
    const{bookName,image}=singleBook || {};
    // console.log(id,data)

    const handleMaskAsRead=id=>{
        //store with id
        // where to store
        // array or collection
        // if book already exist then show a alert
        // if book is not exist then push in the collection or in the array

        MySwal.fire({
            title: <p>Hello World</p>,
            didOpen: () => {
              // `MySwal` is a subclass of `Swal` with all the same instance & static methods
              MySwal.showLoading()
            },
          }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
          })



        addToStoredDB(id)
    }

    return (
        <div className=' w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <button onClick={()=>handleMaskAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
            <button className="btn btn-info m-2">Add to wishlist</button>
        </div>
    );
};

export default BookDetails;