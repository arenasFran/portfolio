import dataProjects from '../assets/data.json';

type ProjectItem = {
    id: number;
    title: string;
    description: string;
    url?: string;
    liveUrl?: string;
    type: string;
    freelance?: boolean;
    frontendRepoUrl?: string;
    backendRepoUrl?: string;
};

export const Projects = ()=>{
    const projects = dataProjects as ProjectItem[];

    const renderAction = (label: string, href?: string, isSecondary = false) => {
        const baseClass = isSecondary
            ? 'text-sm font-medium text-muted no-underline transition-colors duration-200'
            : 'text-sm font-semibold text-ink no-underline transition-colors duration-200';

        if (!href) {
            return null;
        }

        return (
            <a className={`${baseClass} hover:text-accent flex items-center gap-1 group`} href={href} target="_blank" rel="noreferrer">
                {label}
                <svg className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        );
    };

    return (
        <section className="w-[min(760px,calc(100%-2rem))] mx-auto animate-[intro-fade_360ms_ease-out]" aria-label="Projects">
            <h1 className="mx-auto text-center font-[family-name:var(--font-display)] text-[clamp(2.3rem,4.6vw,3.1rem)] leading-none text-accent">My projects</h1>
            <div className="mt-8 grid gap-5">
                {projects.map((p)=>(
                    <article key={p.id} className="border border-line rounded-2xl p-6 bg-white/[0.3] shadow-[0_8px_24px_rgba(66,50,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9b7a3] hover:shadow-[0_12px_32px_rgba(66,50,36,0.1)]">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="m-0 text-[clamp(1.35rem,2.8vw,1.65rem)] leading-[1.2]">{p.title}</h2>
                                {p.freelance && (
                                    <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent ring-1 ring-accent/20">
                                        Freelance
                                    </span>
                                )}
                            </div>
                            <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 border border-[#d8c7b1] rounded-full bg-white/[0.46] text-[#8b6b47] text-xs font-semibold tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                {p.type}
                            </span>
                        </div>
                        <p className="mt-3 text-muted text-[1.05rem] leading-relaxed">{p.description}</p>
                        <div className="mt-5 flex items-center gap-4 flex-wrap">
                            {renderAction('Frontend', p.frontendRepoUrl, true)}
                            {renderAction('Backend', p.backendRepoUrl, true)}
                            <span className="flex-1"></span>
                            {renderAction('Live Demo', p.liveUrl || p.url)}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}