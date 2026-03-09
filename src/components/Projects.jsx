import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <a
            href="https://github.com/yourusername/expense-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/expense-tracker.png')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
          </a>
          <h3>Personal Expense Tracker Dashboard</h3>
          <p>
            A web app to track income and expenses with an analytic dashboard
            and transaction history. Users can add, view, and delete
            transactions through REST APIs.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>Express.js</span>
            <span>TailwindCSS</span>
            <span>MongoDB</span>
            <span>Node.js</span>
            <span>REST APIs</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <a
            href="https://my-weather-app-tawny-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/weather-app.png')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
          </a>
          <h3>Real-Time Weather App</h3>
          <p>
            An Interactive Weather Application using ReactJS Framework. It
            allows users to search for the weather conditions of any city in the
            world and provides current weather information.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <a
            href="https://scholarworks.sjsu.edu/etd_projects/1276/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/YT spam-comments.png')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
          </a>
          <h3>YouTube Comment Spam Classifier</h3>
          <p>
            A machine learning model that detects spam comments on YouTube
            videos. Built using models like Logistic Regression, Random Forest,
            SVM, and BERT.
          </p>
          <div className="project-tech">
            <span>Python</span>
            <span>Scikit-Learn</span>
            <span>BERT</span>
            <span>NLP</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
