import React from 'react';

import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            loader:()=>fetch('book.json'),
            path:'/',
            Component:Home
        },
        {
            path:'/about',
            Component:About
        },
        {
            path:'/bookDetails/:id',
            loader:()=>fetch('./book.json'),
            Component:BookDetails
        },
        {
            path:'readList',
            loader:()=>fetch('book.json'),
            Component:ReadList
        }
      ]
    },
  ]);