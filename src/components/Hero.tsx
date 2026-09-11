import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="container">
        <div className="row align-items-center hero-row">
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-uppercase eyebrow">ASP.NET Developer</p>

            <h1>
              Mark Joshua Aragones
            </h1>

            <h2>
              Full-stack developer building business applications with .NET and modern web technologies.
            </h2>

            <p>
              Experienced in C#, ASP.NET Core, JavaScript, SQL, REST APIs, and enterprise integrations that improve business operations.
            </p>

            <div className="hero-actions mt-4">
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>

              <a
                href="Aragones_MarkJoshua_CV.pdf"
                className="btn btn-outline-secondary"
                download
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-photo-frame">
              <div className="hero-photo-placeholder" aria-label="Professional headshot placeholder">
                <span>MJ</span>
                <small>Add professional headshot</small>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;