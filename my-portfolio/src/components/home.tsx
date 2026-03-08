import './home.css'

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/arenasFran' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/francisco-arenas-9294833b3/' },
    { label: 'Email', href: 'mailto:franciscoarenastorres@outlook.com' },
]

export const Home = () => {
    return (
        <>
            <section id="home" className="hero-panel">
                <p className="kicker">Software Engineer</p>
                <h1 className="profile-name">Francisco Arenas</h1>

                <p className="intro-copy">
                    Backend developer and full-stack builder. I create web applications and
                    solve complex problems with clean, efficient code.
                </p>

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