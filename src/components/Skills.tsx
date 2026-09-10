import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';

function Skills() {
	return (
		<section id="skills" className="section section-alt">
			<div className="container">
				<motion.div
					className="section-header"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.55 }}
				>
					<p className="eyebrow">Skills</p>
					<h2>Tech stack I use to ship production-ready apps</h2>
				</motion.div>

				<div className="skills-grid">
					{skillGroups.map((group, index) => (
						<motion.article
							key={group.category}
							className="panel"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.45, delay: index * 0.08 }}
						>
							<h3>{group.category}</h3>
							<ul className="chip-list">
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
