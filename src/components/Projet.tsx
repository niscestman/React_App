import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Plateforme E-commerce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: "#",
        image: img1,
    },
    {
        id: 2,
        title: 'Portfolio interactif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Gestionnaire de tâches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Application de Chat en temps réel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Socket.io', 'Express.js'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Système de réservation de salles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Analyseur de sentiment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },
];

function Projet() {
    return (
        <div className="mt-14" id="Projet">
            <Title title={"mes projet"} />
            <div className="grid md:grid-cols-3 gap-4">
                {
                    projects.map((project) => (
                        <div key={project.id}
                            className="bg-base-300 p-4 h-fit rounded-xl shadow-2xl">
                            <img src={project.image} alt=""
                                className="w-full rounded-xl  object-cover"
                            />
                            <div>
                                <h1 className=" font-bold my-3">
                                    {project.title}
                                </h1>
                                <p className="text-sm">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 my-3">
                                {
                                    project.technologies.map((tech) => (
                                        <span className="badge badge-ghost badge-sm text-accent">
                                            {tech}
                                        </span>
                                    ))
                                }

                            </div>
                            <div className="flex">
                                <a href={project.demoLink} className="btn btn-accent w-2/3">
                                    Demo <Video className="w-4" />
                                </a>

                                <a href={project.repoLink} className="btn btn-neutral w-1/3 ml-2">
                                    <Github className="w-4" />
                                </a>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}



export default Projet