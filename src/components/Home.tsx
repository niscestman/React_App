import { Mail } from "lucide-react"
import img from "../assets/img.jpg"

const Home = () => {
    return (
        <>
            <div id="Home"
                className=" flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
                <div className="flex flex-col">
                    <h1
                        className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                        Bonjour , <br /> Je suis{" "} <span className="text-accent">OfaDev</span>
                    </h1>
                    <p className="my-4 text-md text-center md:text-left">
                        Je suis un Développeur web junior <br />
                        Avec 1ans d'expérience, utilisant React et Laravel. <br />
                        Contactez moi en cas de besoin
                    </p>
                    <a href="#" className=" btn btn-accent md:w-fit">
                        <Mail className="h-5 w-auto" />
                        Contactez moi
                    </a>
                </div>
                <div className="md:ml-50">
                    <img src={img} alt=""
                        className="h-96 w-96 object-cover border-6 border-accent shadow-2xl"
                        style={{
                            borderRadius: "30% 70% 62% 38% / 68% 66% 34% 32% "
                        }}
                    />
                </div>
            </div>
        </>
    )
}
export default Home