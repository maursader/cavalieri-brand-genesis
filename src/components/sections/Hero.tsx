
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, FileText, MapPin, Flag, Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
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
        ease: "easeOut"
      }
    }
  };

  // Professional geometric animation pattern
  const geometricElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-blue-900/10"></div>
      
      {/* Logo watermark in background */}
      <div 
        className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/lovable-uploads/e01010c2-b324-4a89-90af-9bd2306312eb.png')",
          backgroundSize: "40%",
        }}
      />
      
      {/* Professional geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                linear-gradient(180deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
        
        {/* Animated geometric elements */}
        {geometricElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute border border-slate-300/20 backdrop-blur-sm"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "linear",
              delay: element.delay,
            }}
          >
            {element.id % 3 === 0 && (
              <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-sm" />
            )}
            {element.id % 3 === 1 && (
              <div className="w-full h-full border-l-2 border-slate-400/20 transform rotate-45" />
            )}
            {element.id % 3 === 2 && (
              <div className="w-full h-full rounded-full bg-gradient-to-r from-slate-400/10 to-blue-400/10" />
            )}
          </motion.div>
        ))}
        
        {/* Professional light rays */}
        <div className="absolute top-0 left-1/4 w-px h-1/3 bg-gradient-to-b from-blue-400/20 to-transparent transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-px h-1/4 bg-gradient-to-b from-indigo-400/20 to-transparent transform skew-x-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-px h-1/4 bg-gradient-to-t from-slate-400/20 to-transparent transform -skew-x-6 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
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
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
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
              Full Stack Developer • AI & Machine Learning Expert • Cybersecurity Specialist • Data Analytics Professional
            </motion.p>
            
            <motion.p 
              className="text-lg text-slate-600"
              variants={itemVariants}
            >
              Passionate about leveraging artificial intelligence and advanced data analytics to create innovative solutions that drive business transformation. 
              Two decades of experience in technology, security, and AI implementation with a focus on empowering teams and delivering exceptional results.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {/* First row of buttons */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 shadow-lg">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 shadow-lg">
                    <FileText className="w-5 h-5 mr-2" />
                    Resume
                  </Button>
                </motion.div>
              </div>
              
              {/* Second row of buttons */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-green-300 text-green-700 hover:bg-green-50 shadow-lg"
                    onClick={() => window.open('https://www.fiverr.com/maurizio_c', '_blank')}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.285 7.875c-.26-.26-.682-.26-.942 0l-7.285 7.285-3.285-3.285c-.26-.26-.682-.26-.942 0-.26.26-.26.682 0 .942l3.756 3.756c.26.26.682.26.942 0l7.756-7.756c.26-.26.26-.682 0-.942zm-17.285 8.125h-3v2h3v-2zm5-4h-8v2h8v-2zm3-4h-11v2h11v-2z"/>
                    </svg>
                    Fiverr
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-purple-300 text-purple-700 hover:bg-purple-50 shadow-lg"
                    onClick={() => window.open('https://www.upwork.com/maurizio-c', '_blank')}
                  >
                    <Briefcase className="w-5 h-5 mr-2" />
                    Upwork
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 shadow-lg"
                    onClick={() => window.open('https://tidycal.com/l3', '_blank')}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Call
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-8">
            <motion.img 
              src="/lovable-uploads/8adf3f6a-3592-4fa3-b22e-6353866d49a7.png" 
              alt="Maurizio Cavalieri" 
              className="w-64 h-64 rounded-full shadow-2xl object-cover"
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
                <motion.div 
                  className="text-2xl mx-auto mb-2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  🏆
                </motion.div>
                <div className="text-2xl font-bold text-slate-800">20+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-2xl mx-auto mb-2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  💻
                </motion.div>
                <div className="text-2xl font-bold text-slate-800">5★</div>
                <div className="text-sm text-slate-600">Top Rated</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-2xl mx-auto mb-2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  🚀
                </motion.div>
                <div className="text-2xl font-bold text-slate-800">CEO</div>
                <div className="text-sm text-slate-600">LevelThree Co</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
