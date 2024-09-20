import Helmet from 'react-helmet';
import React from 'react';
import Navar from './Layout/Navabar';
import Sidebar from './Layout/Sidebar ';
import Header from './Dashboard/Header';
import { Outlet } from "react-router-dom";
export default function Home() {
    return (
        <>
            <Helmet>
                <title>Admin </title>
                <script src="https://cdn.tailwindcss.com"></script>
            </Helmet>
            <div className=' '>
            <div className='w-full flex '>
                <div className='w-[15%]'>
                    <Sidebar />
                </div>
                <div className='w-[85%] flex flex-col justify-center   bg-gray-50 p-6'>
                    <Navar />
                   <Outlet />
                </div>

            </div>
            </div>

        </>
    )
}