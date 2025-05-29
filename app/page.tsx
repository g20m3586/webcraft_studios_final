// app/layout.tsx or page.tsx
import { Navbar } from '@/components/ui/navbar'
import { Hero } from '@/components/sections/hero'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="pt-16">{children}</main>
    </>
  )
}