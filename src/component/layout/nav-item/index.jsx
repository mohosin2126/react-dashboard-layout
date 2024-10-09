import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavItem({ to, icon: Icon, label, submenu }){
    const location = useLocation();
    const activeClass = 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100';
    const inactiveClass =
        'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100';

    const [isOpen, setIsOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            {/* This div handles the click for submenu toggling, if applicable */}
            <div onClick={submenu ? toggleSubmenu : null} className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 cursor-pointer ${
                location.pathname === to ? activeClass : inactiveClass
            }`}>
                <Link to={to} className="flex items-center w-full">
                    <Icon />
                    <span className="mx-4">{label}</span>
                    {submenu && <span className={`ml-auto ${isOpen ? "transform rotate-90" : ""}`}>▸</span>}
                </Link>
            </div>

            {/* Render submenu if it exists and is open */}
            {submenu && isOpen && (
                <div className="ml-6">
                    {submenu.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={`flex items-center px-6 py-2 mt-2 duration-200 border-l-4 ${
                                location.pathname === item.to ? activeClass : inactiveClass
                            }`}
                        >
                            <span className="mx-4">{item.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};


