import './home.css'
import { FiMapPin, FiPhone } from 'react-icons/fi'

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/arenasFran' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/francisco-arenas-9294833b3/' },
    { label: 'Email', href: 'mailto:franciscoarenastorres@outlook.com' },
]

const personalData = [
    {
        label: 'Phone',
        value: '+598 91416860',
        icon: <FiPhone aria-hidden="true" />,
    },
    {
        label: 'Location',
        value: 'Montevideo, Uruguay',
        icon: <FiMapPin aria-hidden="true" />,
    },
]

export const Home = () => {
    return (
        <>
            <section id="home" className="hero-panel">
                <p className="kicker">Software Engineer</p>
                <h1 className="profile-name">Francisco Arenas</h1>

                <p className="intro-copy">
                 I build clean interfaces and practical systems that solve real problems for clients.
                </p>

                <section className="personal-strip" aria-label="Personal data">
                    {personalData.map((item) => (
                        <article key={item.label} className="personal-item">
                            <span className="personal-icon">{item.icon}</span>
                            <div className="personal-copy">
                                <p className="personal-label">{item.label}</p>
                                <p className="personal-value">{item.value}</p>
                            </div>
                        </article>
                    ))}
                </section>

                <nav className="social-row" aria-label="Social links">
                    {socialLinks.map((item) => (
                        <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                            {item.label}
                        </a>
                    ))}
                </nav>
            </section>

            <section id="projects" className="ghost-section" aria-hidden="true" />
            <section id="experience" className="ghost-section" aria-hidden="true" />
            <section id="contact" className="ghost-section" aria-hidden="true" />
        </>
    )
}