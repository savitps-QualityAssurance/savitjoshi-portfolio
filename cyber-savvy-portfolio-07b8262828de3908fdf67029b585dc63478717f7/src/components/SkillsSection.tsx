import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Globe, Shield, Database, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['Frontend', 'Backend', 'React.js', 'Next.js'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Cybersecurity Tools',
    icon: Shield,
    skills: ['Kali Linux', 'Wireshark', 'Nmap', 'Burp Suite', 'John the Ripper'],
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
  title: 'Core Concepts',
  icon: Database,
  skills: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Web Development',
    'System Design (Basics)',
    'Networking Fundamentals',

    // ✅ Quality Assurance – Software (10+ techniques)
    'Software Testing Fundamentals',
    'Manual Testing',
    'Test Case Design',
    'Test Scenarios & Test Execution',
    'Functional Testing',
    'Regression Testing',
    'Smoke & Sanity Testing',
    'Black Box Testing',
    'Defect Life Cycle',
    'Bug Reporting & Tracking',
    'SDLC & STLC',
  ],
  color: 'from-purple-500/20 to-pink-500/20',
},
  {
    title: 'Development Tools',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'VS Code', 'Linux'],
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    title: 'Operating Systems',
    icon: Terminal,
    skills: ['Linux', 'Windows', 'Command Line'],
    color: 'from-slate-500/20 to-gray-500/20',
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">— SKILLS</p>
            <h2 className="section-title">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              A comprehensive skill set spanning multiple domains of technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card-hover p-6"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5`}>
                  <category.icon className="text-primary" size={24} />
                </div>
                
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
