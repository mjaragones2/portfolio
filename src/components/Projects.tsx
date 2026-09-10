import { motion } from 'framer-motion';
import { projects } from '../data/projects';

function Projects() {
	return (
		<section id="projects" className="section">
			<div className="container">
				<motion.div
					className="section-header"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.55 }}
				>
					<p className="eyebrow">Projects</p>
					<h2>Selected work</h2>
				</motion.div>

				<div className="projects-grid">
					{projects.map((project, index) => (
						<motion.article
							key={project.id}
							className="panel project-card"
							initial={{ opacity: 0, y: 22 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
						>
							<p className="project-type">{project.type}</p>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<p className="project-impact">
								<strong>Business Impact:</strong> {project.impact}
							</p>
							<p className="project-role">Role: {project.role}</p>
							<ul className="chip-list">
								{project.technologies.map((tech) => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
