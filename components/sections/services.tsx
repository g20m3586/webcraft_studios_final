// components/sections/services.tsx
'use client'

import { motion } from 'framer-motion'
import { Code, LayoutTemplate, Smartphone, BarChart2, Zap, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Next.js Development",
    description: "Blazing-fast React applications built with Next.js 14, leveraging App Router, Server Components, and edge runtime.",
    highlight: "from $4,500"
  },
  {
    icon: <LayoutTemplate className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Figma-to-code conversions with attention to micro-interactions, accessibility, and design systems.",
    highlight: "from $3,200"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Optimization",
    description: "PWAs and responsive designs that deliver app-like experiences on any device.",
    highlight: "from $2,800"
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Performance Tuning",
    description: "90+ Lighthouse scores guaranteed through code splitting, image optimization, and caching strategies.",
    highlight: "from $1,900"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Web3 Integration",
    description: "Blockchain integrations, smart contract development, and crypto payment gateways.",
    highlight: "from $5,500"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "DevOps & Hosting",
    description: "Vercel, AWS, and Docker configurations with CI/CD pipelines and monitoring.",
    highlight: "from $2,500"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-black">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-4"
        >
          Our Next-Gen Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-400 max-w-2xl mx-auto"
        >
          Specialized solutions for modern web challenges
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-black/50 backdrop-blur-md p-6 hover:bg-black/70 transition-all"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              
              <p className="text-neutral-400 mb-5">{service.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-400">{service.highlight}</span>
                <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-white">
                  Details
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16"
      >
        <Button variant="outline" size="lg" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:text-white">
          View All Case Studies
        </Button>
      </motion.div>
    </section>
  )
}
