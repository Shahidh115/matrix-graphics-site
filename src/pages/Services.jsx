import { useEffect, useState } from 'react'
import services from '../data/services'
import ServiceCard from '../components/ServiceCard'
import ScrollReveal from '../components/ScrollReveal'

export default function Services() {
  const [openInquiryId, setOpenInquiryId] = useState(null)

  useEffect(() => {
    document.title = 'Services - Matrix Graphics'
  }, [])

  function toggleInquiry(serviceId) {
    setOpenInquiryId((currentId) => (currentId === serviceId ? null : serviceId))
  }

  return (
    <div className="container py-8 sm:py-10 md:py-12">
      <div className="max-w-3xl">
        <h1 className="section-title text-2xl font-bold sm:text-3xl">Our Services</h1>
        <p className="mt-2 font-medium text-mgnavy/85">
          From quick document work to branded merchandise, we help choose the right paper, size, finish and timeline for each job.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ScrollReveal key={service.id} delay={`delay-${(index % 3 + 1) * 100}`} className="h-full">
            <ServiceCard
              service={service}
              expanded={openInquiryId === service.id}
              onToggle={() => toggleInquiry(service.id)}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
