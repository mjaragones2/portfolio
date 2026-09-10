import { motion } from 'framer-motion';

const achievements = [
	{ label: 'Years of Professional Experience', value: '3+' },
	{ label: 'Industry Certifications', value: '2' },
	{ label: 'BSIT Graduate', value: 'CTU' }
];

function Achievements() {
	return (
		<section id="achievements" className="section">
			<div className="container">
				<motion.div
					className="section-header"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.55 }}
				>
					<p className="eyebrow">Highlights</p>
					<h2>Impact at a glance</h2>
				</motion.div>

				<div className="achievements-grid">
					{achievements.map((item, index) => (
						<motion.article
							key={item.label}
							className="panel achievement-card"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.45, delay: index * 0.1 }}
						>
							<p className="achievement-value">{item.value}</p>
							<p className="achievement-label">{item.label}</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Achievements;
