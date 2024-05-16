import { useState } from "react";
import { Link, router } from "@inertiajs/react";
import PropTypes from "prop-types";

const categories = [
    "Development",
    "Web Development",
    "Mobile Development",
    "Programming",
    "Data Science",
    "Design",
    "Business",
    "Marketing",
    "Finance",
    "Photography",
    "Music",
    "Personal Development",
    "Health & Fitness",
    "Lifestyle",
    "Languages",
];

function NavLinkItem({ className = "", children, ...props }) {
    return (
        <Link {...props} className={"flex-shrink-0 " + className}>
            {children}
        </Link>
    );
}
NavLinkItem.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

function CartNavLink() {
    return (
        <div className="px-2 self-center">
            <a className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>{" "}
            </a>
        </div>
    );
}

function ProfileNavLink({ user }) {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const handleMouseEnter = () => {
        setShowProfileDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowProfileDropdown(false);
    };

    return (
        <div
            className="flex justify-center items-center h-full w-16 flex-shrink-0 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a className="flex justify-center items-center w-10 h-10 rounded-full bg-black text-white text-center text-xl">
                <span className="font-extrabold">E</span>
            </a>
            <div
                className={`flex flex-col absolute top-12 right-1 w-64 border border-slate-300 bg-white ${
                    showProfileDropdown ? "block" : "hidden"
                }`}
            >
                <a className="flex gap-4 border-b border-slate-300 p-4">
                    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-black text-white text-center text-xl">
                        <span className="font-extrabold">E</span>
                    </div>
                    <div>
                        <p className="font-bold hover:text-purple-700 cursor-pointer">
                            {user.name}
                        </p>
                        <p className="font-thin">{user.email}</p>
                    </div>
                </a>
                <div className="flex flex-col gap-4 p-4 border-b border-slate-300">
                    <a href="#" className="hover:text-purple-700">
                        Cart
                    </a>
                </div>
                <div className="flex flex-col gap-4 p-4 border-b border-slate-300">
                    <Link
                        href={route("profile.edit")}
                        className="hover:text-purple-700"
                    >
                        Profile
                    </Link>
                    <Link
                        href={route("logout")}
                        method="post"
                        className="hover:text-purple-700"
                    >
                        Log Out
                    </Link>
                </div>
                <div className="flex flex-col gap-4 p-4 border-b border-slate-300">
                    <NavLinkItem className="hover:text-purple-700">
                        Tech on Udemy
                    </NavLinkItem>
                    <NavLinkItem className="hover:text-purple-700">
                        my learnings
                    </NavLinkItem>
                </div>
            </div>
        </div>
    );
}

function SearchBar() {
    return (
        <div className="flex-grow bg-slate-50 border border-slate-600 rounded-3xl h-12 text-xl">
            <form action="#" className="flex min-w-56">
                <button
                    className="p-1 disabled:opacity-50 w-10 ms-4 mt-2"
                    type="submit"
                    disabled
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
                <input
                    type="text"
                    id="search"
                    name="q"
                    placeholder="Search for anything"
                    className="w-full h-8 mt-2 ms-3 me-6 border-none outline-none focus:border-none focus:outline-none focus:ring-0 bg-inherit"
                />
            </form>
        </div>
    );
}

function Category({ children: name }) {
    return (
        <li className="pb-2 hover:text-purple-700 cursor-pointer">{name}</li>
    );
}
Category.propTypes = {
    name: PropTypes.string.isRequired,
};

export default function Navbar({ user }) {
    const [showCategories, setShowCategories] = useState(false);

    const handleMouseEnter = () => {
        setShowCategories(true);
    };

    const handleMouseLeave = () => {
        setShowCategories(false);
    };

    return (
        <nav className="flex align-center min-h-16 w-full justify-between bg-base-100 py-2 px-10 text-sm gap-4 shadow-2xl">
            <div className="flex align-center flex-shrink-0">
                <a className="h-full flex-shrink-0">
                    <Link href="/">
                        <img
                            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                            alt="Udemy"
                            width="100"
                            height="50"
                            loading="lazy"
                        ></img>
                    </Link>
                </a>
                <div
                    className="h-full px-2 py-2 self-center items-center relative flex-shrink-0"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <a className="px-5 my-10">Categories</a>
                    <div
                        className={`absolute top-12 w-64 bg-white ${
                            showCategories ? "block" : "hidden"
                        }`}
                    >
                        <ul className="p-3">
                            {categories.map((category, index) => (
                                <Category key={index}>{category}</Category>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <SearchBar />
            <div className="flex align-center">
                <div className="flex align-center gap-2">
                    <NavLinkItem className="self-center px-2 text-center">
                        Tech on Udemy
                    </NavLinkItem>
                    {user && (
                        <NavLinkItem className="self-center px-2">
                            my learnings
                        </NavLinkItem>
                    )}
                    <CartNavLink />
                    {user ? (
                        <ProfileNavLink user={user} />
                    ) : (
                        <>
                            <div className="h-full flex-shrink-0 flex items-center">
                                <Link
                                    className="py-2 px-4 border text-black border-black bg-white"
                                    href={route("login")}
                                >
                                    Log In
                                </Link>
                            </div>
                            <div className="h-full flex-shrink-0 flex items-center">
                                <Link
                                    className="py-2 px-4 text-white bg-black"
                                    href={route("register")}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}