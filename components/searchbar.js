import { useState, useEffect } from 'react';
import Link from 'next/link';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    
    useEffect(() => {
        const handleClickOutside = (e) => {
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

    return (
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

export default SearchBar;