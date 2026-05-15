import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import services from '../data/services'
import ServiceCard from '../components/ServiceCard'

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
              Special discounts available for school and bulk orders
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

          <div className="print-preview" aria-label="Print samples preview">
            <div className="sample-sheet sample-sheet-one">
              <span>BUSINESS CARDS</span>
            </div>
            <div className="sample-sheet sample-sheet-two">
              <span>BANNERS</span>
            </div>
            <div className="sample-sheet sample-sheet-three">
              <span>STICKERS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container grid gap-4 py-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <div className="stat-icon" aria-hidden="true">{item.icon}</div>
              <div>
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            </div>
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
            {services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                expanded={openInquiryId === service.id}
                onToggle={() => toggleInquiry(service.id)}
              />
            ))}
          </div>
        </section>

        <section id="gallery" className="mt-12 grid gap-4 scroll-mt-28 md:grid-cols-3">
          {[
            ['✨', 'Quality', 'Calibrated colour, careful material choice and clean finishing.'],
            ['⚡', 'Speed', 'Clear timelines, express support and quick replies for urgent jobs.'],
            ['💰', 'Value', 'Practical recommendations so you get the right finish for the budget.']
          ].map(([icon, title, text]) => (
            <div key={title} className="info-panel">
              <div className="info-icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </section>

        <section id="about" className="mt-12 scroll-mt-28">
          <h2 className="section-title text-2xl">What Customers Notice</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <blockquote className="quote-card">
              <p>"Excellent service, fast delivery and great print quality. Highly recommended."</p>
              <cite>K. Perera</cite>
            </blockquote>
            <blockquote className="quote-card">
              <p>"Very professional and helpful staff. Our banners looked amazing."</p>
              <cite>S. Fernando</cite>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  )
}
