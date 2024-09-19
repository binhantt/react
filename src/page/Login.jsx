import React from 'react';
import Navar from '../components/Navar';
import Header from '../components/Login/HeaderLogin';
import Helmet from 'react-helmet';
import Footer from '../components/Fooder';
import '../index.css'
const Login = () => {
    return (
        <div className='Login'>
            <Helmet>
                <script src="https://cdn.tailwindcss.com"></script>
                <title> Login </title>
            </Helmet>
            <Navar />
            <div className='flex flex-col space-y-4 md:space-y-0'>
                <Header />
                <Footer />
            </div>
        </div>
    )
}
export default Login;