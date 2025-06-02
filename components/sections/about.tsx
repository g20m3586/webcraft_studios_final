// components/sections/about.tsx
'use client'

import { motion } from 'framer-motion'
import { Rocket, Code, Palette, Layers, Award, Sparkles, Trophy, Smile, Infinity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function About() {
  return (
    <section 
      className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden bg-black backdrop-blur-md" 
      id="about"
    >
      {/* Decorative elements - moved behind the main content */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center relative">
        {/* Founder profile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-[600px] mx-auto w-full"
        >
          <div className="absolute -top-6 -left-6 w-40 h-40 border-2 border-blue-500/30 rounded-xl z-0 hidden sm:block" />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-purple-500/30 rounded-xl z-0 hidden sm:block" />
          
          <div className="relative z-10 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm shadow-2xl">
            <div className="aspect-[3/4] relative">
              <Image
                src="/founder.jpg"
                alt="Founder of NextCraft Studios"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Alex Rivera</h3>
                  <p className="text-blue-400">Founder & Lead Designer</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                    asChild
                  >
                    <a href="#" target="_blank">
                      <Award className="h-4 w-4 mr-2" />
                      Awards
                    </a>
                  </Button>
                </div>
              </div>
              <p className="text-neutral-400 mb-6 text-sm sm:text-base">
                With over 8 years of experience in digital product design and development, 
                I bridge the gap between stunning visuals and cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-neutral-300 hover:text-white bg-neutral-800/50"
                  asChild
                >
                  <a href="#" target="_blank">
                    <Code className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-neutral-300 hover:text-white bg-neutral-800/50"
                  asChild
                >
                  <a href="#" target="_blank">
                    <Palette className="h-4 w-4 mr-2" />
                    Dribbble
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-neutral-300 hover:text-white bg-neutral-800/50"
                  asChild
                >
                  <a href="#" target="_blank">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Behance
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Studio story */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 mb-6"
          >
            <Rocket className="h-4 w-4" />
            <span>Our Story</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Crafting Digital Excellence Since 2018
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-neutral-400 mb-8 leading-relaxed"
          >
            NextCraft Studios was born from a passion for creating digital experiences 
            that blend artistic vision with technical precision. What started as a 
            one-person studio has grown into a collective of talented designers and 
            developers pushing boundaries.
          </motion.p>

          <div className="space-y-6">
            {[
              {
                icon: <Palette className="h-5 w-5" />,
                bg: "bg-blue-500/10",
                border: "border-blue-500/20",
                color: "text-blue-400",
                title: "Design Philosophy",
                description: "We believe interfaces should be intuitive, beautiful, and purposeful. Every pixel serves a function in our human-centered approach."
              },
              {
                icon: <Code className="h-5 w-5" />,
                bg: "bg-purple-500/10",
                border: "border-purple-500/20",
                color: "text-purple-400",
                title: "Technical Approach",
                description: "Cutting-edge tech meets robust architecture. We build for performance, scalability, and maintainability without compromising creativity."
              },
              {
                icon: <Layers className="h-5 w-5" />,
                bg: "bg-green-500/10",
                border: "border-green-500/20",
                color: "text-green-400",
                title: "Our Process",
                description: "Iterative design sprints, component-driven development, and continuous collaboration ensure we deliver exceptional results on time."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-900/70 transition-colors"
              >
                <div className={`p-3 rounded-lg ${item.bg} ${item.border} ${item.color} flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24"
      >
        {[
          { value: "50+", label: "Projects", icon: <Layers className="h-6 w-6" /> },
          { value: "100%", label: "Satisfaction", icon: <Smile className="h-6 w-6" /> },
          { value: "8", label: "Awards", icon: <Trophy className="h-6 w-6" /> },
          { value: "∞", label: "Creativity", icon: <Infinity className="h-6 w-6" /> }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-900/70 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-neutral-800/50 border border-neutral-700">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
            </div>
            <p className="text-neutral-400 text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}