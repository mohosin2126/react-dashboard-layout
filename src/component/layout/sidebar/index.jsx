
import { Component, LayoutDashboard, Rows4 } from "lucide-react";
import NavLinkItem from "../navlink-item/index.jsx";

export default function Sidebar({ isOpen, setIsOpen }) {
    return (
        <>
            <div className="flex">
                {/* Backdrop */}
                <div className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>
                {/* End Backdrop */}

                <div className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 ${
                    isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
                }`}>
                    <div className="flex items-center justify-center mt-8">
                        <div className="flex items-center">
                            {/* Logo */}
                            <svg className="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* SVG Path */}
                            </svg>
                            <span className="mx-2 text-2xl font-semibold text-white">V-Dashboard</span>
                        </div>
                    </div>

                    <nav className="mt-10">
                        <NavLinkItem to="/dashboard" icon={LayoutDashboard}>Dashboard</NavLinkItem>
                        <NavLinkItem to="/ui-elements" icon={Component}>UI Elements</NavLinkItem>
                        <NavLinkItem to="/tables" icon={Rows4}>Tables</NavLinkItem>
                    </nav>
                </div>
            </div>
        </>
    );
}
