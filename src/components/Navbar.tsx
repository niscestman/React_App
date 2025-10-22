import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <>
            <div className="flex justify-center md:justify-between items-center p-4">
                <a href="#"
                    className="flex items-center font-bold text-3xl md:text-xl"
                >
                    <Container className="mr-2" />
                    OFA
                    <span className="text-accent">DEV</span>
                </a>

                <ul
                    className="hidden md:flex space-x-4">
                    <li>
                        <a  href="#Home" className="btn btn-md btn-ghost">
                            Acceuil
                        </a>
                    </li>
                    <li>
                        <a href="#About" className="btn btn-md btn-ghost">
                            A propros
                        </a>
                    </li>
                    <li>
                        <a href="#Experience" className="btn btn-md btn-ghost">
                            Mes expériences
                        </a>
                    </li>
                    <li>
                        <a href="#Projet" className="btn btn-md btn-ghost">
                            Mes projets
                        </a>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Navbar 