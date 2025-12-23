import Link from 'next/link';
import { projectData } from '@/data/data'; 
import ProjectCard from './ProjectCard';
import { Reveal } from '@/utils/animations'; // <-- Adjust import path as needed



const Projects = () => (
    <section id="work" className="py-24 px-6 md:px-20 text-white">
        <Reveal>
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-4xl md:text-6xl font-light font-['Space Grotesk']">Selected Works</h2>
                <p className="text-gray-500 text-sm hidden md:block">2023 — 2025</p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectData.map((project, index) => {
                // 🔑 MODIFIED LOGIC: Use a consistent, progressive delay.
                const progressiveDelay = index * 150; 

                return (
                    <Link 
                        key={project.id} 
                        href={`/projects/${encodeURIComponent(project.id)}`}
                        className="block h-full"
                        scroll={true}
                    >
                        <ProjectCard 
                            project={project} 
                            index={index}
                            delay={progressiveDelay} // Use the new progressive delay
                        />
                    </Link>
                );
            })}
        </div>
    </section>
);

export default Projects;