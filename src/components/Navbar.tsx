import { useState } from "react";
import { Menu, X, Container } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="">
            <div className="  px-4  md:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center font-bold text-2xl md:text-xl">
                    <Container className="mr-2" />
                    OFA<span className="text-accent">DEV</span>
                </a>

                {/* Menu desktop */}

                <ul className="hidden md:flex space-x-6">
                    <li><a href="#Home" className="btn btn-ghost btn-md">Accueil</a></li>
                    <li><a href="#About" className="btn btn-ghost btn-md">A propos</a></li>
                    <li><a href="#Experience" className="btn btn-ghost btn-md">Mes expériences</a></li>
                    <li><a href="#Projet" className="btn btn-ghost btn-md">Mes projets</a></li>
                </ul>

                {/* Bouton hamburger (mobile) */}
                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X className="cursor-pointer" size={28} /> :
                        <Menu className="cursor-pointer rounded-full p-2 hover:btn" size={38} />}
                </div>
            </div>

            {/* Menu mobile */}
          
            <div
                className={`md:hidden overflow-hidden  rounded-xl flex justify-center mt-6 
                    ${open ? "max-h-60 max-w-40" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col items-center">
                    <li className=""><a href="#Home" className=" btn btn-ghost px-4 py-2">Accueil</a></li>
                    <li className=""><a href="#About" className=" btn btn-ghost block px-4 py-2">A propos</a></li>
                    <li className=""><a href="#Experience" className=" btn btn-ghost block px-4 py-2">Mes expériences</a></li>
                    <li><a href="#Projet" className=" btn btn-ghost block px-4 py-2">Mes projets</a></li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Navbar;
