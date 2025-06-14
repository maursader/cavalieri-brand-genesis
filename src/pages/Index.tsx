
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, FileText, MapPin, Building, GraduationCap, Star, ArrowRight, Flag, Code, Briefcase, Trophy } from "lucide-react";
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-blue-900/10"></div>
        
        {/* Floating animated elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-red-400/20 to-blue-400/20 rounded-full blur-sm"
          animate={{
            y: [-10, 10, -10],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1]
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-sm"
          animate={{
            y: [-10, 10, -10],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-red-400/20 rounded-full blur-sm"
          animate={{
            y: [-10, 10, -10],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            delay: 2
          }}
        />

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2"
                whileHover={{ scale: 1.05, backgroundColor: "#fef2f2" }}
              >
                <Flag className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">🍁 Proud Canadian Professional</span>
              </motion.div>

              <div>
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-slate-800 mb-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
                >
                  Maurizio
                  <motion.span 
                    className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent block"
                  >
                    Cavalieri
                  </motion.span>
                </motion.h1>
                
                <motion.div 
                  className="flex items-center gap-3 text-slate-600 mb-6"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-lg">Currently in Taipei, Taiwan</span>
                  </div>
                </motion.div>
              </div>

              <motion.p 
                className="text-xl text-slate-700 leading-relaxed font-medium"
                variants={itemVariants}
              >
                Full Stack Developer • Global Marketing Director • AI Expert • Real Estate Investor
              </motion.p>
              
              <motion.p 
                className="text-lg text-slate-600"
                variants={itemVariants}
              >
                Two decades of excellence across technology, marketing, and real estate. 
                Transforming businesses through innovation and strategic leadership.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 shadow-lg">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 shadow-lg">
                    <FileText className="w-5 h-5 mr-2" />
                    Resume
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image and Stats */}
            <motion.div variants={itemVariants} className="flex flex-col items-center space-y-8">
              <motion.img 
                src="https://maurizio.ca/wp-content/uploads/2024/09/2.png" 
                alt="Maurizio Cavalieri Logo" 
                className="w-64 h-64 rounded-full shadow-2xl"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              <div className="grid grid-cols-3 gap-6 w-full max-w-md">
                <motion.div 
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200"
                  whileHover={{ y: -5 }}
                >
                  <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">20+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200"
                  whileHover={{ y: -5 }}
                >
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">5★</div>
                  <div className="text-sm text-slate-600">Top Rated</div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200"
                  whileHover={{ y: -5 }}
                >
                  <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">CEO</div>
                  <div className="text-sm text-slate-600">LevelThree Co</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
              Excellence Across Industries
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-slate-200 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center gap-2">
                    <Building className="w-6 h-6 text-blue-600" />
                    CEO & Founder
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    LevelThree Co.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
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
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-slate-200 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-500" />
                    Top Rated Seller
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Fiverr Freelancer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
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
              whileHover={{ y: -5 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="bg-white/80 backdrop-blur-sm border-slate-200 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-red-600" />
                    Alumni
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    University of Toronto, Canada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Strong academic foundation from one of Canada's most prestigious institutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
              World-Class Experience
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by industry leaders and prestigious organizations worldwide.
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
              Core Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Let's connect and explore how we can create exceptional value together.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 border-0 text-lg px-8 py-6 shadow-lg font-semibold"
              >
                Get In Touch
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-800">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <p className="text-slate-300">
            © 2024 Maurizio Cavalieri. Building excellence across industries from Canada to the world.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
