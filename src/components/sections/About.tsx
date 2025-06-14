
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Star, GraduationCap } from "lucide-react";
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
  );
};
