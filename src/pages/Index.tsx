
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, FileText, MapPin, Building, GraduationCap, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      company: "HP",
      role: "Software Developer",
      type: "Technology",
      icon: "💻"
    },
    {
      company: "Apple",
      role: "Software Developer",
      type: "Technology",
      icon: "🍎"
    },
    {
      company: "University of Toronto",
      role: "Technology Professional",
      type: "Education",
      icon: "🎓"
    },
    {
      company: "GTAA (Toronto Pearson)",
      role: "Technology Professional",
      type: "Transportation",
      icon: "✈️"
    }
  ];

  const skills = [
    "Full Stack Development",
    "Global Marketing Direction",
    "AI & Machine Learning",
    "Real Estate Investment",
    "Mortgage Expertise",
    "Business Strategy"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <img 
                src="https://maurizio.ca/wp-content/uploads/2024/09/2.png" 
                alt="Maurizio Cavalieri Logo" 
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 p-4"
              />
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                Maurizio
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Cavalieri
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-purple-300 mb-6">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Taipei, Taiwan</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Full Stack Developer • Global Marketing Director • AI Expert • Real Estate Investor
              </p>
              <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                Two decades of excellence across technology, marketing, and real estate. 
                Transforming businesses through innovation and strategic leadership.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20">
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Excellence Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Fortune 500 companies to innovative startups, I've consistently delivered 
              exceptional results across technology, marketing, and real estate sectors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-purple-500/30 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Building className="w-6 h-6 text-purple-400" />
                    CEO & Founder
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    LevelThree Co.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Leading innovative solutions and driving business growth through strategic technology implementation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-purple-500/30 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    Top Rated Seller
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Fiverr Freelancer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Delivering exceptional freelance services with consistently outstanding client satisfaction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-purple-500/30 h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                    Alumni
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    University of Toronto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Strong academic foundation from one of Canada's most prestigious institutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              World-Class Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by industry leaders and prestigious organizations worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <span className="text-2xl">{exp.icon}</span>
                      {exp.company}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {exp.role} • {exp.type}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mastery across multiple disciplines, delivering comprehensive solutions.
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
              >
                <Badge 
                  variant="outline" 
                  className="text-lg py-2 px-4 border-purple-400 text-purple-300 hover:bg-purple-500/20 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Let's connect and explore how we can create exceptional value together.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg px-8 py-6"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Maurizio Cavalieri. Building excellence across industries.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
