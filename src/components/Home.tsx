import { FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi'
import { type Dispatch, type SetStateAction } from 'react'
import { type Section } from './MainContent'

type HomeProps = {
    setSection: Dispatch<SetStateAction<Section>>
}

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

export const Home = ({ setSection }: HomeProps) => {
    return (
        <>
            <section id="home" className="w-[min(720px,calc(100%-2rem))] mx-auto text-center animate-[intro-fade_420ms_ease-out]">
                <div className="mb-6">
                    <button 
                        type="button"
                        onClick={() => setSection('contact')}
                        className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-accent/20 hover:-translate-y-0.5 cursor-pointer"
                    >
                        Available for work
                    </button>
                </div>
                
                <h1 className="my-0 font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.5rem)] leading-[0.93] tracking-tight">
                    Francisco Arenas
                </h1>

                <p className="mt-4 mx-auto max-w-[38ch] text-muted font-[family-name:var(--font-display)] text-[clamp(1.2rem,2.2vw,1.6rem)] leading-relaxed">
                    I build clean interfaces and practical systems that solve real problems for clients.
                </p>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center items-center">
                    {personalData.map((item) => (
                        <div key={item.label} className="flex items-center gap-2 text-muted">
                            <span className="text-accent">{item.icon}</span>
                            <span className="text-sm font-medium">{item.value}</span>
                        </div>
                    ))}
                </div>

                <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3 justify-center" aria-label="Social links">
                    {socialLinks.map((item) => (
                        <a 
                            key={item.label} 
                            href={item.href} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="group inline-flex items-center gap-2 text-ink no-underline text-[0.95rem] font-semibold transition-all duration-200 hover:text-accent"
                        >
                            {item.label}
                            <FiArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                        </a>
                    ))}
                </nav>
            </section>

            <section id="projects" className="h-px" aria-hidden="true" />
            <section id="experience" className="h-px" aria-hidden="true" />
            <section id="contact" className="h-px" aria-hidden="true" />
        </>
    )
}