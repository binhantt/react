import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useImage } from 'react-image'
import draw2 from '../../assets/draw2.png';
const HeaderLogin = () => {
    return (
        <div className=" bg-gray-100 flex flex-col justify-center flex sm:px-6 lg:px-8">
            <div className='flex justify-center items-center '>
                <div className='hidden md:block '> 
                    <img src={draw2} alt="" />
                </div>
                <div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md space-x-4">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Đăng nhập
                        </h2>
                        <div className='flex justify-center space-x-4 items-center'>
                            <div className="mt-2 text-center text-sm text-gray-600">
                                Đăng nhập với
                            </div>
                            <div className="mt-2 flex justify-center space-x-3">
                                <button className="bg-blue-600 p-2 rounded-full text-white">
                                    <FaFacebookF />
                                </button>
                                <button className="bg-blue-400 p-2 rounded-full text-white">
                                    <FaTwitter />
                                </button>
                                <button className="bg-blue-700 p-2 rounded-full text-white">
                                    <FaLinkedinIn />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <form className="space-y-6" action="#" method="POST">
                                <div >
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Địa chỉ email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Mật khẩu
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Ghi nhớ đăng nhập
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Quên mật khẩu?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg"
                                    >
                                        ĐĂNG NHẬP
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Chưa có tài khoản?{' '}
                                    <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Đăng ký
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HeaderLogin; 