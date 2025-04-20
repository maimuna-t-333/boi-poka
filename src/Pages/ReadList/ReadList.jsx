import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/AddToDB';
import Book from '../Book/Book';

const ReadList = () => {

    //worst case
    const [readList, setReadList]=useState([])
    const [sort, setSort]=useState('')
    const data=useLoaderData();
    console.log(data)

    useEffect(()=>{
        const storedBookData=getStoredBook();
        // console.log(storedBookData)
        const ConvertedStoredBooks=storedBookData.map(id=>parseInt(id))
        // console.log(ConvertedStoredBooks)
        const myReadList=data.filter(book=>ConvertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    },[])


    const handleSort=(type)=>{
             setSort(type)
             if(type === 'Pages'){
                const sortByPage=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
                setReadList(sortByPage);
                console.log(sortByPage)
             }
             if(type === 'Pages'){
                const sortByRating=[...readList].sort((a,b)=>a.rating-b.rating)
                setReadList(sortByRating);
                console.log(sortByRating)
                
             }
    }

    return (
        
        <div>
            <details className="dropdown">
  <summary className="btn m-1">Sort By:{sort? sort: ''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('Pages')}>Pages</a></li>
    <li><a onClick={()=>handleSort('Ratings')}>Ratings</a></li>
  </ul>
</details>
              <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My WishList</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I read:{readList.length}</h2>
      {
        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;