import { useState, useEffect } from 'react'; //the good old hooks that we need
import Link from 'next/link'; //client side nav in next.js

const SearchBar = () => { //this is the start of our cool function. it contains the links to each page and slides out when someone pushs the menu
    const [isOpen, setIsOpen] = useState(false); //setting a boolean to start with the thing closed

    const toggleSidebar = () => { //converts that state to toggle the sidebar open
        setIsOpen(!isOpen);
    };
    
    useEffect(() => {
        const handleClickOutside = (e) => {   //this is a function to see when the user click outside the sidebar when they do it closes the sidebar
            const sidebar = document.getElementById('sidebar');
            const menuButton = document.getElementById('menuButton');
            if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return ( //the rending of the page and the button happening here with the links and all
        <>
        <div id="menuButton" onClick={toggleSidebar}>☰</div>
            <div id="sidebar" className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </>
    );
}

export default SearchBar; //we need to export the function to be used elsewhere 