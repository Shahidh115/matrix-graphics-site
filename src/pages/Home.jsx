import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import services from '../data/services'
import ServiceCard from '../components/ServiceCard'
import ScrollReveal from '../components/ScrollReveal'
import imgBusinessCards from '../assets/business_cards.png'
import imgBanners from '../assets/banners.png'
import imgStickers from '../assets/stickers.png'

const stats = [
  { icon: '🖨️', value: '18+', label: 'print services' },
  { icon: '🎓', value: 'Bulk', label: 'school order discounts' },
  { icon: '🤝', value: 'Customer', label: 'satisfaction' }
]

export default function Home() {
  const [openInquiryId, setOpenInquiryId] = useState(null)

  useEffect(() => {
    document.title = 'Matrix Graphics - Your Printing Solutions'
  }, [])

  function toggleInquiry(serviceId) {
    setOpenInquiryId((currentId) => (currentId === serviceId ? null : serviceId))
  }

  return (
    <div>
      <section id="home" className="hero-band scroll-mt-28">
        <div className="container grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-mgyellow/40 bg-black/35 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-mgyellow">
              Premium Print Studio
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Matrix Graphics
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
              Fast, clean and affordable printing for businesses, schools, events and everyday documents in Avissawella.
            </p>
            <div className="mt-5 inline-flex max-w-full items-center rounded-md border border-mgyellow/40 bg-mgyellow px-4 py-2 text-sm font-bold text-mgblack shadow-md">
              Special discounts available for School and Bulk Orders!
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/services" className="btn-primary">
                View Services
              </Link>
              <a href="https://wa.me/94777043334?text=Hello%20Matrix%20Graphics%2C%20I%20need%20a%20quote%20for%20your%20printing%20services." className="btn-secondary">
                Request Quote
              </a>
            </div>
          </div>

          <div className="relative min-h-[22rem] w-full flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }} aria-label="Print samples preview">
            <div className="relative w-full h-full max-w-sm mx-auto">
              <img src={imgBusinessCards} alt="Premium Business Cards" className="absolute top-[5%] left-[0%] w-[55%] rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/10 z-20 hover:scale-105 transition-transform duration-500" />
              <img src={imgBanners} alt="Vinyl Banners" className="absolute top-[20%] right-[0%] w-[60%] rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/10 z-10 hover:scale-105 transition-transform duration-500" />
              <img src={imgStickers} alt="Custom Stickers" className="absolute bottom-[5%] left-[20%] w-[55%] rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10 z-30 hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container grid gap-4 py-5 sm:grid-cols-3">
          {stats.map((item, index) => (
            <ScrollReveal key={item.label} delay={`delay-${(index + 1) * 100}`} className="h-full">
              <div className="stat-card h-full">
                <div className="stat-icon" aria-hidden="true">{item.icon}</div>
                <div>
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="container py-10 sm:py-12">
        <section id="services" className="scroll-mt-28">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title text-2xl">Popular Services</h2>
              <p className="mt-2 text-sm font-medium text-mgnavy/85">Quick options customers ask for most often.</p>
            </div>
            <Link to="/services" className="text-sm font-bold text-mgred hover:text-mgnavy">
              See all services
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <ScrollReveal key={service.id} delay={`delay-${(index + 1) * 100}`}>
                <ServiceCard
                  service={service}
                  expanded={openInquiryId === service.id}
                  onToggle={() => toggleInquiry(service.id)}
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="gallery" className="mt-12 grid gap-4 scroll-mt-28 md:grid-cols-3">
          {[
            ['✨', 'Quality', 'Calibrated colour, careful material choice and clean finishing.'],
            ['⚡', 'Speed', 'Clear timelines, express support and quick replies for urgent jobs.'],
            ['💰', 'Value', 'Practical recommendations so you get the right finish for the budget.']
          ].map(([icon, title, text], index) => (
            <ScrollReveal key={title} delay={`delay-${(index + 1) * 100}`} className="h-full">
              <div className="info-panel h-full">
                <div className="info-icon" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </ScrollReveal>
          ))}
        </section>

        <section id="about" className="mt-12 scroll-mt-28">
          <h2 className="section-title text-2xl">What Customers Notice</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <ScrollReveal delay="delay-100">
              <blockquote className="quote-card h-full">
                <p>"Excellent service, fast delivery and great print quality. Highly recommended."</p>
                <cite>K. Perera</cite>
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay="delay-200">
              <blockquote className="quote-card h-full">
                <p>"Very professional and helpful staff. Our banners looked amazing."</p>
                <cite>S. Fernando</cite>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  )
}
