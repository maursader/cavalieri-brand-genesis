
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "HP",
      type: "Enterprise Software Development",
      description: "Contributed to enterprise-level software development projects, working with large-scale systems and modern technologies to support business operations and user experiences.",
      icon: "🏢"
    },
    {
      company: "Apple",
      type: "Software Engineering & Innovation",
      description: "Participated in software development initiatives, focusing on application development, code quality, and technical solutions using industry-standard development practices.",
      icon: "💻"
    },
    {
      company: "University of Toronto",
      type: "Software Development & Research",
      description: "Developed web applications and digital platforms, utilizing full-stack technologies to create solutions for academic and administrative environments.",
      icon: "🎓"
    },
    {
      company: "GTAA (Toronto Pearson)",
      type: "Mission-Critical Software Systems",
      description: "Worked on software infrastructure projects supporting airport operations, contributing to systems reliability and operational efficiency.",
      icon: "✈️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Proven Software Development Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trusted by industry leaders to architect, develop, and deploy mission-critical software solutions 
            that power business operations and deliver exceptional user experiences at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center gap-3">
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {exp.icon}
                    </motion.span>
                    {exp.company}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {exp.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
