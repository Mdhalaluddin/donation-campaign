import { NavLink } from "react-router-dom";


const Navbar = () => {
    const Links =  <>
        <li> <NavLink to ='/'>Home</NavLink></li>
        <li> <NavLink to ='/donation'>Donation</NavLink></li>
        <li> <NavLink to ='/statistics'>Statistics</NavLink></li>
        </>
return (
    <div className="navbar container mx-auto">
        <div className="flex-1 ">
            <img className="w-[160px]" src={'https://i.ibb.co/RjMvrFk/Logo.png'} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 bg-white">
                {Links}
            </ul>
        </div>
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="mt-3 z-[3] p-2 shadow menu menu-sm dropdown-content rounded-box bg-slate-400 -ml-20 ">
                {Links}
            </ul>
        </div>
    </div>

)
};

export default Navbar;

