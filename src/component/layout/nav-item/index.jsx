import { Link, useLocation } from "react-router-dom";

export default function NavItem({ to, icon: Icon, label }){
    const location = useLocation();
    const activeClass = 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100';
    const inactiveClass =
        'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100';
    return (
        <Link
            to={to}
            className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 ${
                location.pathname === to ? activeClass : inactiveClass
            }`}
        >
            <Icon />
            <span className="mx-4">{label}</span>
        </Link>
    );
};