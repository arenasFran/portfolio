import { FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi'
import { type CSSProperties, type Dispatch, type SetStateAction } from 'react'
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
    const reveal = (delay: number): CSSProperties => ({ animationDelay: `${delay}ms` })

    return (
        <>
            <section id="home" className="w-[min(720px,calc(100%-2rem))] mx-auto text-center animate-[intro-fade_420ms_ease-out]">
                <div className="mb-6 hero-reveal" style={reveal(40)}>
                    <button 
                        type="button"
                        onClick={() => setSection('contact')}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide
                        transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.2,0,0,1)]
                        hover:bg-accent/20 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(80,52,24,0.12)]
                        active:translate-y-0 active:scale-[0.985] cursor-pointer focus-visible:outline-none
                        focus-visible:ring-4 focus-visible:ring-[rgba(191,123,47,0.18)]"
                    >
                        <span aria-hidden="true" className="size-2 rounded-full bg-[#4CAF7D]" />
                        Available for work
                    </button>
                </div>
                
                <h1 className="my-0 font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.5rem)] leading-[0.93] tracking-tight hero-reveal" style={reveal(100)}>
                    Francisco Arenas
                </h1>

                <p className="mt-4 mx-auto max-w-[38ch] text-muted font-[family-name:var(--font-display)] text-[clamp(1.2rem,2.2vw,1.6rem)] leading-relaxed hero-reveal" style={reveal(160)}>
                    I build clean interfaces and practical systems that solve real problems for clients.
                </p>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center items-center">
                    {personalData.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-2 text-muted hero-reveal" style={reveal(220 + (index * 50))}>
                            <span className="text-accent">{item.icon}</span>
                            <span className="text-sm font-medium">{item.value}</span>
                        </div>
                    ))}
                </div>

                <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3 justify-center" aria-label="Social links">
                    {socialLinks.map((item, index) => (
                        <a 
                            key={item.label} 
                            href={item.href} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="group inline-flex items-center gap-2 text-ink no-underline text-[0.95rem] font-semibold hero-reveal
                            transition-[transform,color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:text-accent hover:-translate-y-[1px]
                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(191,123,47,0.16)] rounded-md"
                            style={reveal(320 + (index * 40))}
                        >
                            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left
                            after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 group-hover:after:scale-x-100">
                                {item.label}
                            </span>
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