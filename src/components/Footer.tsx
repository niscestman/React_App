import { Container, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center  p-10 flex flex-col bg-base-300 mt-10"
        style={{
            borderRadius:"47% 53% 0% 0% / 28% 23% 9% 10% "
        }}
        >
            <aside >

                <Container className="h-12 w-12" />
                <p className="font-bold">
                    OFA
                    <span className="text-accent">DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous droits reservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com" target="_blank"
                    rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-current"/>
                    </a>

                    <a href="https://youtube.com" target="_blank"
                    rel="noopener noreferrer">
                    <Youtube className="w-6 h-6 text-current" />
                    </a>

                    <a href="https://instagram.com" target="_blank"
                    rel="noopener noreferrer">
                    <Instagram className="w-6 h-6 text-current" />
                    </a>

                    <a href="https://linkedin.com" target="_blank"
                    rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer