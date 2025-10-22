import Title from "./Title"
import img from '../assets/img.jpg'
import { CalendarSync, LetterText, Paintbrush } from "lucide-react"

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis développeur frontend avce une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du  développement backend pour creer des APIs robuste",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "UI/UX disign",
        description: "Je des maquettes et interfaces utilisateurs attrayantes et fonctionnelles",
        icon: <Paintbrush className="text-accent scale-150" />,

    },
];

function About() {
    return (
        <>
            <div id="About" className="bg-base-300 p-10 mb-10 md:mb-32">
                <Title title={"à propos"} />

                <div className="md:h-screen flex justify-center items-center">
                    <div className="hidden md:block">
                        <img src={img} alt=""
                            className="h-98 w-96 object-cover rounded-xl"

                        />
                    </div>
                    <div  className="md:ml-4 space-y-4">
                        {
                            aboutSections.map((section) => (
                                <div key={section.id}
                                className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-2xl"
                                >
                                    <div className="mb-2 md:mb-0">
                                        {section.icon}
                                    </div>
                                    <div className="text-center md:text-left md:ml-4">
                                        <h2 className="text-xl font-bold mb-1">
                                            {section.title}
                                        </h2>
                                        <p className="text-sm">
                                            {section.description}
                                        </p>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About