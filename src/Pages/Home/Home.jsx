import React from 'react';
import Bannner from '../../Components/Banner/Bannner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
            <Bannner></Bannner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;