// components/sections/footer.tsx
'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Mail, Twitter, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/" className="text-xl font-bold text-blue-500 flex items-center gap-2">
              <Code className="h-6 w-6" />
              NextCraft Studios
            </Link>
            <p className="text-neutral-400 text-sm">
              Crafting digital excellence through innovative design and cutting-edge development.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Twitter className="h-5 w-5" />, url: "#" },
                { icon: <Linkedin className="h-5 w-5" />, url: "#" },
                { icon: <Github className="h-5 w-5" />, url: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white hover:bg-neutral-800/30 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-neutral-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting', 'DevOps'].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    href="/services" 
                    className="text-neutral-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in touch</h3>
            <div className="space-y-3">
              <motion.a 
                href="mailto:hello@nextcraftstudios.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-neutral-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@nextcraftstudios.com
              </motion.a>
              <motion.a 
                href="tel:+15551234567"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-neutral-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Smartphone className="h-4 w-4" />
                +1 (555) 123-4567
              </motion.a>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-4 border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:text-white"
              asChild
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8"
        />

        {/* Copyright and legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-neutral-500"
          >
            © {new Date().getFullYear()} NextCraft Studios. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}