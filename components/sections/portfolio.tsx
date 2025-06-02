// components/sections/portfolio.tsx
'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay, Navigation } from 'swiper/modules'
import { Github, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'

const projects = [
  {
    title: "Next.js E-Commerce",
    description: "High-performance storefront with Stripe integration",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    githubUrl: "https://github.com/yourusername/next-ecommerce",
    liveUrl: "https://next-store.vercel.app",
    image: "/project1.jpg"
  },
  {
    title: "AI Content Generator",
    description: "GPT-4 powered content creation dashboard",
    tags: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/ai-content-gen",
    liveUrl: "https://ai-content.vercel.app",
    image: "/project2.jpg"
  },
  {
    title: "Web3 NFT Marketplace",
    description: "Decentralized marketplace with smart contracts",
    tags: ["Solidity", "Ethereum", "Next.js", "Web3.js"],
    githubUrl: "https://github.com/yourusername/nft-market",
    liveUrl: "https://nft-market-demo.vercel.app",
    image: "/project3.jpg"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics platform with custom visualizations",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/saas-dashboard",
    liveUrl: "https://analytics-saas.vercel.app",
    image: "/project4.jpg"
  }
]

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden bg-black"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
      </div>

      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-4"
        >
          Our Cutting-Edge Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-400 max-w-2xl mx-auto"
        >
          Projects that push the boundaries of modern web development
        </motion.p>
      </div>

      <div className="relative h-[600px] w-full max-w-3xl mx-auto">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          className="w-full h-full"
          cardsEffect={{
            slideShadows: false,
            perSlideOffset: 10,
            perSlideRotate: 1.5,
            rotate: true,
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/90 backdrop-blur-sm h-full w-full shadow-xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card background layers */}
                <div className="absolute inset-0 bg-neutral-900/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-40" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
                
                {/* Card content */}
                <div className="relative z-10 h-full flex flex-col p-6">
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div className="bg-neutral-900/70 backdrop-blur-xs p-4 rounded-lg border border-neutral-800/50 flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-neutral-300 text-sm">{project.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-neutral-400 hover:text-white bg-neutral-800/50 border border-neutral-800/50"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-neutral-400 hover:text-white bg-neutral-800/50 border border-neutral-800/50"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-1 text-xs rounded-full bg-neutral-800/70 text-neutral-300 backdrop-blur-sm border border-neutral-800/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative h-48 rounded-lg overflow-hidden border border-neutral-800/50 mt-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <Button 
          variant="ghost"
          size="icon"
          className="swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 text-neutral-400 hover:text-white bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 hover:bg-neutral-800/50"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost"
          size="icon"
          className="swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10 text-neutral-400 hover:text-white bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 hover:bg-neutral-800/50"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16"
      >
        <Button 
          variant="outline" 
          size="lg" 
          className="border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:text-white"
          asChild
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
