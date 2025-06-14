
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "HP",
      type: "Enterprise Solutions & Security",
      icon: "🛡️"
    },
    {
      company: "Apple",
      type: "Innovation & Development",
      icon: "🔍"
    },
    {
      company: "University of Toronto",
      type: "Technology & Research at one of Canada's most prestigious institutions",
      icon: "📊"
    },
    {
      company: "GTAA (Toronto Pearson)",
      type: "Critical Infrastructure Technology",
      icon: "🏢"
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
            Proven Track Record of Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trusted by industry leaders to deliver innovative technology solutions and drive digital transformation across diverse sectors.
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
