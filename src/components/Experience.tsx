import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

function Experience() {
	return (
		<section id="experience" className="section section-alt">
			<div className="container">
				<motion.div
					className="section-header"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.55 }}
				>
					<p className="eyebrow">Experience</p>
					<h2>Professional background</h2>
				</motion.div>

				<div className="timeline">
					{experiences.map((item, index) => (
						<motion.article
							key={`${item.company}-${item.role}`}
							className="panel timeline-item"
							initial={{ opacity: 0, x: -24 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
						>
							<p className="timeline-period">{item.period}</p>
							<h3>{item.role}</h3>
							<p className="timeline-company">{item.company}</p>
							<p>{item.summary}</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;
