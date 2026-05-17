import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  useEffect(() => {
    document.title = 'About Us - Matrix Graphics'
  }, [])

  return (
    <div className="container py-8 sm:py-10 md:py-12">
      <div className="max-w-3xl">
        <h1 className="section-title text-2xl font-bold sm:text-3xl">About Matrix Graphics</h1>
        <p className="mt-4 text-sm font-medium leading-7 text-mgnavy/85 sm:text-base">
          Matrix Graphics supports local businesses, schools, restaurants, event organisers and everyday customers with practical print solutions. The goal is simple: clear communication, reliable timing and finished work that looks ready to use.
        </p>
      </div>

      <section className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
        {[
          ['Our Story', 'Built around hands-on print work, quick service and careful finishing for local customers.'],
          ['Mission', 'To make professional printing easier to order, easier to understand and easier to trust.'],
          ['Values', 'Quality, honesty, speed and helpful customer guidance from enquiry to delivery.']
        ].map(([title, text], index) => (
          <ScrollReveal key={title} delay={`delay-${(index + 1) * 100}`} className="h-full">
            <div className="info-panel h-full">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>
    </div>
  )
}
