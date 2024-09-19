
import React, { useState, useEffect } from "react";
import { IconName } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes ,FaUserCircle  } from "react-icons/fa";
import { BsChevronDown  } from "react-icons/bs";
const Navar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navItems = [
        { name: "Home", link: "/" },
        {
            name: "Products",
            link: "#",
            dropdown: [
                { name: "Electronics", link: "#" },
                { name: "Clothing", link: "#" },
                { name: "Books", link: "#" },
            ],
        },
        { name: "About", link: "#" },
        { name: "Contact", link: "#" },
    ];
    const navLogin = [
        { name: " Đăng Nhập ", link: "/dang-nhap" },
        { name: "/ Đăng kí ", link: "/Dang-ki" }
    ];
    useEffect(() => {
        if (searchQuery.length > 2) {
            setIsLoading(true);
            // Simulating API call for search results
            setTimeout(() => {
                setSearchResults([
                    { id: 1, title: "Result 1" },
                    { id: 2, title: "Result 2" },
                    { id: 3, title: "Result 3" },
                ]);
                setIsLoading(false);
            }, 1000);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setError(null);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === "") {
            setError("Please enter a search query");
        } else {
            // Perform search action
            console.log("Searching for:", searchQuery);
        }
    };

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">Logo</div>
                <div className="hidden md:flex space-x-4">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative group">
                            <a
                                href={item.link}
                                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                                aria-label={item.name}
                            >
                                {item.name}
                                {item.dropdown && (
                                    <BsChevronDown className="inline-block ml-1" />
                                )}
                            </a>
                            {item.dropdown && (
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out">
                                    <div
                                        className="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                            <a
                                                key={dropdownIndex}
                                                href={dropdownItem.link}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                {dropdownItem.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="hidden md:flex justify-center items-center ">
                    <form onSubmit={handleSearchSubmit} className="relative mr-3">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="bg-white text-gray-800 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                            aria-label="Search"
                        />
                        <button
                            type="submit"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            aria-label="Submit search"
                        >
                            <FaSearch />
                        </button>
                        {isLoading && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-purple-500"></div>
                            </div>
                        )}
                    </form>
                    {error && (
                        <p className="text-red-300 text-xs mt-1 absolute">{error}</p>
                    )}
                    {searchResults.length > 0 && (
                        <div className="absolute mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical">
                                {searchResults.map((result) => (
                                    <a
                                        key={result.id}
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                    >
                                        {result.title}
                                    </a>
                                ))}
                            </div>
                           
                        </div>
                    )}
                <div className="hidden md:flex justify-center space-x-1 text-white items-center ">
                                <FaUserCircle />
                                {navLogin.map((item, index) => (
                                    <div key={index} className="relative group">
                                        <a
                                            href={item.link}
                                            className="text-white hover:text-gray-200  py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                                            aria-label={item.name}
                                        >
                                            {item.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item, index) => (
                            <Link
                            to={item.link}
                            className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                            aria-label={item.name}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                    <div className="px-2 pt-2 pb-3">
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full bg-white text-gray-800 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                        </form>

                    </div>
                </div>
            )}
        </nav>
    )
}
export default Navar;