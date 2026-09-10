import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">About</p>
          <h2>Building practical software for real teams</h2>
        </div>

        <div className="panel about-panel">
          <p>
            I am a full-stack developer with hands-on experience in .NET, C#,
            JavaScript, SQL, and API integrations. I build practical systems that
            help teams automate workflows, improve visibility, and reduce manual
            processing time.
          </p>
          <p>
            I enjoy end-to-end development, from backend logic and database design
            to responsive user interfaces. I focus on maintainable code and clear
            collaboration with stakeholders to deliver measurable outcomes.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
