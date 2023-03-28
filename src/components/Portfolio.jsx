import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const clickEffect = {
  scale: 0.85,
  transition: { duration: 0.3 },
};

function Portfolio() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileTap={clickEffect}
          >
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
