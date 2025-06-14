
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Star, GraduationCap, Shield, BarChart3, Users } from "lucide-react";
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
            Innovation Through Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From Fortune 500 companies to innovative startups, I've consistently delivered 
            exceptional results across technology, security, and business transformation initiatives.
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
                  <Shield className="w-6 h-6 text-red-600" />
                  Cybersecurity Expert
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Enterprise Security & Risk Management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Leading security initiatives, threat detection, and risk management strategies for enterprise environments, including SOC operations and incident response.
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
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  Data Analytics Leader
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Advanced Analytics & Business Intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Transforming complex data into actionable insights through advanced analytics, machine learning, and custom dashboards that drive strategic decisions.
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
                  <Users className="w-6 h-6 text-green-600" />
                  Team Development
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Leadership & Mentorship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Building and mentoring high-performing teams across technology, security, and analytics to achieve exceptional results and drive innovation.
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
                  <Building className="w-6 h-6 text-purple-600" />
                  CEO & Founder
                </CardTitle>
                <CardDescription className="text-slate-600">
                  LevelThree Co.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Leading innovative technology solutions and driving business growth through strategic implementation and entrepreneurial vision.
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
                  <Star className="w-6 h-6 text-yellow-500" />
                  Top Rated Professional
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Freelance Excellence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Delivering exceptional technology and consulting services with consistently outstanding client satisfaction across multiple platforms.
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
                  <GraduationCap className="w-6 h-6 text-red-600" />
                  Alumni
                </CardTitle>
                <CardDescription className="text-slate-600">
                  University of Toronto, Canada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Strong academic foundation in computer science and engineering from one of Canada's most prestigious institutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
