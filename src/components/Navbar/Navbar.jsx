import { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";


const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' }
    ];

    return (
        <nav>
            <div className="md:hidden  text-2xl" onClick={()=>setOpen(!open)}>
                {
                    open===true?
                    <AiOutlineCloseSquare />:<GiHamburgerMenu  />
                }
            </div>
            
            <ul className="md:flex text-left font-bold bg-slate-200 p-2">
            {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;