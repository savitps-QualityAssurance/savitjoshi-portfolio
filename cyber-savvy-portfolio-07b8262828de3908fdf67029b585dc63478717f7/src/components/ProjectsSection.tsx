import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Mic, Settings, Brain } from 'lucide-react';

const projects = [
  {
    title: 'NOVA 3.0',
    subtitle: 'AI Voice Assistant',
    description:
      'An advanced AI-based voice assistant capable of controlling PC/laptop operations through natural language commands. Features system file access, settings modification, and intelligent task automation.',
    tags: ['Python', 'AI/ML', 'Voice Recognition', 'System Integration'],
    features: [
      { icon: Mic, text: 'Voice Command Control' },
      { icon: Settings, text: 'System Settings Access' },
      { icon: Brain, text: 'AI-Powered Intelligence' },
    ],
    github: 'https://github.com/savitps-QualityAssurance', // ✅ UPDATED LINK
    featured: true,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">
              — PROJECTS
            </p>
            <h2 className="section-title">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Showcasing innovative projects that demonstrate technical skills
              and creativity
            </p>
          </div>

          {/* Featured Project */}
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card-hover overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Project Visual */}
                <div className="relative p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center min-h-[300px]">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"
                    />

                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/30">
                        <Brain className="text-primary" size={48} />
                      </div>
                      <h3 className="text-4xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-primary font-mono text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  {project.featured && (
                    <span className="inline-block mb-4 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      FEATURED
                    </span>
                  )}

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {project.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <feature.icon size={16} className="text-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Github size={18} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* More projects coming */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              More projects coming soon. Stay tuned! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
