import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const traits = [
  {
    icon: Target,
    title: 'Detail-Oriented',
    description:
      'Focused on identifying defects, edge cases, and ensuring consistent software quality',
  },
  {
    icon: Lightbulb,
    title: 'Quality-Focused',
    description:
      'Committed to delivering reliable, user-friendly, and high-performance applications',
  },
  {
    icon: Users,
    title: 'Team Collaborator',
    description:
      'Works closely with developers and stakeholders to maintain quality across the SDLC',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Main content */}
          <div>
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">
              — ABOUT ME
            </p>

            <h2 className="section-title">
              Ensuring Software{' '}
              <span className="text-gradient">Quality & Reliability</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a{' '}
                <span className="text-foreground font-medium">
                  Quality Assurance Engineer
                </span>{' '}
                with a strong focus on validating software functionality,
                performance, and user experience. 
              </p>

              <p>
                My interests include{' '}
                <span className="text-foreground font-medium">
                  manual testing, API testing, web technologies, and basic test
                  automation
                </span>
                , which helps me collaborate effectively with development teams
                and contribute to higher-quality releases.
              </p>

              <p>
                I am actively seeking opportunities to work on real-world
                projects where I can contribute to product quality while
                continuously improving my skills as a QA professional.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-gradient mb-1">2027</div>
                <div className="text-sm text-muted-foreground">
                  Expected Graduation
                </div>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-gradient mb-1">5+</div>
                <div className="text-sm text-muted-foreground">
                  QA Skill Areas
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Traits */}
          <div className="space-y-6">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-card-hover p-6 flex gap-5"
              >
                <div className="icon-box shrink-0">
                  <trait.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
