
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
            Empowering Security & Analytics Teams
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From Fortune 500 SOCs to innovative data teams, I've consistently delivered 
            exceptional results in cybersecurity operations, threat detection, and advanced analytics.
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
                  SOC Operations Expert
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Security Operations Center Leadership
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Leading threat detection initiatives, incident response protocols, and advanced security monitoring for enterprise environments.
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
                  Data Analytics Specialist
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Advanced Analytics & Visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Transforming complex security data into actionable insights through advanced analytics, machine learning, and custom dashboards.
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
                  SOC & Analytics Team Training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Mentoring and developing high-performing SOC analysts and data professionals to excel in cybersecurity operations.
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
                  Leading innovative cybersecurity solutions and driving business growth through strategic technology implementation.
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
                  Top Rated Seller
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Fiverr Cybersecurity Expert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Delivering exceptional cybersecurity and data analytics services with consistently outstanding client satisfaction.
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
                  Strong academic foundation in computer science and cybersecurity from one of Canada's most prestigious institutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
