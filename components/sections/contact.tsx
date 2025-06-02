'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden bg-black"
      id="contact"
    >
      {/* Gradient blur background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      </div>

      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-4"
        >
          Let's Build Something Amazing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-400 max-w-2xl mx-auto"
        >
          Have a project in mind? Reach out and let's create digital magic together.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20" />
          <div className="relative rounded-xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-md p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>

            <form className="space-y-5">
              <Input
                type="text"
                placeholder="Your name"
                className="bg-neutral-800/50 border-neutral-700 focus:border-blue-500 focus:ring-blue-500/30 text-white placeholder-neutral-500"
              />
              <Input
                type="email"
                placeholder="Email address"
                className="bg-neutral-800/50 border-neutral-700 focus:border-blue-500 focus:ring-blue-500/30 text-white placeholder-neutral-500"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="bg-neutral-800/50 border-neutral-700 focus:border-blue-500 focus:ring-blue-500/30 text-white placeholder-neutral-500"
              />
              <Textarea
                placeholder="Your message"
                rows={5}
                className="bg-neutral-800/50 border-neutral-700 focus:border-blue-500 focus:ring-blue-500/30 text-white placeholder-neutral-500"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {[
            {
              icon: <Mail className="h-6 w-6" />,
              title: 'Email us',
              content: 'hello@nextcraftstudios.com',
              action: 'mailto:hello@nextcraftstudios.com',
              color: 'text-blue-400',
            },
            {
              icon: <MapPin className="h-6 w-6" />,
              title: 'Visit us',
              content: '123 Digital Ave, Silicon Valley, CA',
              action: 'https://maps.google.com',
              color: 'text-purple-400',
            },
            {
              icon: <Phone className="h-6 w-6" />,
              title: 'Call us',
              content: '+1 (555) 123-4567',
              action: 'tel:+15551234567',
              color: 'text-green-400',
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.action}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`block rounded-xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-md p-6 hover:bg-neutral-900/90 transition-all ${item.color} hover:text-white`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-neutral-800/50 border border-neutral-700 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-neutral-300">{item.content}</p>
                </div>
              </div>
            </motion.a>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4"
          >
            <h4 className="text-sm font-medium text-neutral-400 mb-3">FOLLOW US</h4>
            <div className="flex gap-3">
              {[
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  url: '#',
                  color: 'hover:bg-blue-500/10 hover:text-blue-400',
                },
                {
                  icon: <Twitter className="h-5 w-5" />,
                  url: '#',
                  color: 'hover:bg-sky-500/10 hover:text-sky-400',
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 transition-colors ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Optional Map Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-md overflow-hidden h-64 w-full"
      >
        <div className="h-full w-full bg-[url('/map-placeholder.jpg')] bg-cover bg-center flex items-center justify-center">
          <Button
            variant="outline"
            className="border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:text-white"
          >
            View on Google Maps
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
