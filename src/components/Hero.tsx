import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="row align-items-center hero-row">
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-uppercase eyebrow">
              Application Developer
            </p>

            <h1>
              Hi, I'm Mark.
            </h1>

            <h2>
              Full-stack developer building business applications with .NET and modern web technologies.
            </h2>

            <p>
              Experienced in C#, ASP.NET Core, JavaScript, SQL, REST APIs, and enterprise integrations that improve business operations.
            </p>

            <div className="hero-actions mt-4">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>

              <a href="#contact" className="btn btn-outline-secondary">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;