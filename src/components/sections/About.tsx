
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Smartphone, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
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
            Full Stack Development Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From modern React frontends to scalable Node.js backends, I build complete web solutions 
            that deliver exceptional user experiences and robust performance across the entire technology stack.
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
                  <Code className="w-6 h-6 text-blue-600" />
                  Frontend Development
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Modern React & TypeScript
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Building responsive, interactive user interfaces with React, Next.js, TypeScript, and modern CSS frameworks. 
                  Focused on performance optimization and exceptional user experiences.
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
                  <Database className="w-6 h-6 text-green-600" />
                  Backend Development
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Node.js & API Architecture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Developing robust RESTful APIs and GraphQL services with Node.js, Express, and modern database solutions. 
                  Expert in microservices architecture and scalable backend systems.
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
          >
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-purple-600" />
                  Cloud Architecture
                </CardTitle>
                <CardDescription className="text-slate-600">
                  AWS & Docker Deployment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Designing and deploying cloud-native applications on AWS, implementing CI/CD pipelines, 
                  containerization with Docker, and ensuring high availability and scalability.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                  Mobile Development
                </CardTitle>
                <CardDescription className="text-slate-600">
                  React Native & PWA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Creating cross-platform mobile applications with React Native and Progressive Web Apps 
                  that deliver native-like experiences across iOS and Android platforms.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-cyan-600" />
                  Web Technologies
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Modern Web Standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Leveraging the latest web technologies including WebAssembly, Service Workers, 
                  Web Components, and modern browser APIs to build cutting-edge web applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  Performance Optimization
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Speed & Scalability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Optimizing application performance through code splitting, lazy loading, caching strategies, 
                  and advanced profiling techniques to ensure lightning-fast user experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
