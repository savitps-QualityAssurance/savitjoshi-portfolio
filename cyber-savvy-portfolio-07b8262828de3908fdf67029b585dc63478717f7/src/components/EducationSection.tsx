import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">— EDUCATION</p>
          <h2 className="section-title mb-12">
            Academic <span className="text-gradient">Background</span>
          </h2>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-hover p-8 md:p-10 max-w-3xl"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Computer Applications
                </h3>
                <p className="text-primary font-semibold mb-4">
                  Cybersecurity Specialization
                </p>

                <div className="glass-card inline-block px-4 py-2 mb-6">
                  <span className="text-foreground font-medium">Poornima University</span>
                </div>

                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>Expected Graduation: <span className="text-foreground">2027</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>Jaipur, Rajasthan</span>
                  </div>
                </div>

                {/* Coursework highlights */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Key Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Network Security',
                      'Ethical Hacking',
                      'Cryptography',
                      'Web Development',
                      'Database Management',
                      'Software Engineering',
                    ].map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
