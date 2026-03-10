import dataProjects from '../assets/data.json';

type ProjectItem = {
    id: number;
    title: string;
    description: string;
    url?: string;
    liveUrl?: string;
    type: string;
    githubUrl?: string;
    frontendRepoUrl?: string;
    backendRepoUrl?: string;
};

export const Projects = ()=>{
    const projects = dataProjects as ProjectItem[];

    const renderAction = (label: string, href?: string, isSecondary = false) => {
        const className = isSecondary
            ? 'project-card-link project-card-link-secondary'
            : 'project-card-link';

        if (!href) {
            return (
                <span className={`${className} project-card-link-disabled`} aria-disabled="true">
                    {label}
                </span>
            );
        }

        return (
            <a className={className} href={href} target="_blank" rel="noreferrer">
                {label}
            </a>
        );
    };

    return (
        <section className="projects-panel" aria-label="Projects">
            <h1 className="projects-title">My projects</h1>
            <div className="projects-grid">
                {projects.map((p)=>(
                    <article key={p.id} className="project-card">
                        <h2 className="project-card-title">{p.title}</h2>
                        <p className="project-card-description">{p.description}</p>
                        <div className="project-card-meta">
                            <p className="project-card-badge">{p.type}</p>
                            <div className="project-card-actions">
                                {renderAction('Frontend', p.frontendRepoUrl || p.githubUrl, true)}
                                {renderAction('Backend', p.backendRepoUrl, true)}
                                {renderAction('Live Demo', p.liveUrl || p.url)}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}