import dataProjects from '../assets/data.json';

export const Projects = ()=>{
    return (
        <div>
            <h1>My projects</h1>
            {dataProjects.map((p)=>(
                <div key={p.id}>
                    <h2>{p.title}</h2>
                    <p>{p.description}</p>
                </div>
            ))}
        </div>
    )
}