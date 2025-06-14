
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const Skills = () => {
  const skills = [
    "Full Stack Development",
    "Cybersecurity & SOC Operations", 
    "Data Analytics & Visualization",
    "Cloud Architecture",
    "DevOps & Automation",
    "AI & Machine Learning",
    "Business Strategy",
    "Team Leadership"
  ];

  return (
    <section className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Technical Expertise & Leadership
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Combining deep technical knowledge with strategic business thinking to deliver innovative solutions that drive growth and efficiency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge 
                variant="outline" 
                className="text-lg py-3 px-6 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400 transition-colors shadow-sm"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
