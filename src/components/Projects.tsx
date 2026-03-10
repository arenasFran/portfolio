import dataProjects from '../assets/data.json';

export const Projects = ()=>{
    return (
        <section className="projects-panel" aria-label="Projects">
            <h1 className="projects-title">My projects</h1>
            <div className="projects-grid">
                {dataProjects.map((p)=>(
                    <article key={p.id} className="project-card">
                        <h2 className="project-card-title">{p.title}</h2>
                        <p className="project-card-description">{p.description}</p>
                        <div className="project-card-meta">
                            <p className="project-card-badge">{p.type}</p>
                            <a className="project-card-link" href={p.url} target="_blank" rel="noreferrer">Visit URL</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}