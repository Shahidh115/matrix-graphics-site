import { useEffect, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const WA_NUMBER = '94777043334'
const SHOP_LOCATION_URL = 'https://maps.app.goo.gl/p3tjRsqe1CDPAAYz6'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact - Matrix Graphics'
  }, [])

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [error, setError] = useState('')

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setError('')
  }

  function submit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.message.trim()) {
      setError('Please add your name and message before sending.')
      return
    }

    const contactLine = [form.phone, form.email].filter(Boolean).join(' / ')
    const text = [
      `Hello Matrix Graphics, I am ${form.name.trim()}.`,
      form.message.trim(),
      contactLine ? `Contact: ${contactLine}` : ''
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="container py-8 sm:py-10 md:py-12">
      <div className="max-w-3xl">
        <h1 className="section-title text-2xl font-bold sm:text-3xl">Contact Us</h1>
        <div className="mt-2 flex flex-col gap-1 text-sm font-medium text-mgnavy/85 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:text-base">
          <span>Phone: <a href="tel:+94777043334" className="font-semibold text-mgnavy">+94 777 04 3334</a></span>
          <span className="hidden sm:inline mx-1">|</span>
          <span>Email: <a href="mailto:info@matrixgraphics.lk" className="font-semibold text-mgnavy break-all">info@matrixgraphics.lk</a></span>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ScrollReveal delay="delay-100">
          <div className="dark-panel p-5 sm:p-6 h-full">
            <h2 className="text-lg font-bold text-mgnavy">Get a Quote</h2>
            <form className="mt-4 space-y-3" onSubmit={submit}>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="form-field" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" className="form-field" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="form-field" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="What do you need printed?" className="form-field h-32 resize-none" />
              {error && <p className="text-sm font-semibold text-mgyellow">{error}</p>}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="btn-primary">
                  Send via WhatsApp
                </button>
                <a href="mailto:info@matrixgraphics.lk" className="btn-secondary text-center">
                  Send Email
                </a>
              </div>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="delay-200">
          <div className="dark-panel p-5 sm:p-6 h-full">
            <h2 className="text-lg font-bold text-mgnavy">Visit Us</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-mgnavy">
              <a
                href={SHOP_LOCATION_URL}
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:text-mgyellow hover:underline"
              >
                99D, Yatiyanthota Road, Seethawaka, Avissawella, Sri Lanka
              </a>
            </p>
            <div className="mt-4 overflow-hidden rounded-md border border-white/20 h-60 w-full shadow-inner">
              <iframe 
                src="https://maps.google.com/maps?q=99D,+Yatiyanthota+Road,+Seethawaka,+Avissawella,+Sri+Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Matrix Graphics Shop Location"
              ></iframe>
            </div>

            <div className="mt-5 grid gap-3 rounded-md border border-white/20 bg-black/60 p-4 text-sm font-semibold text-white">
              <div>
                <h3 className="font-bold text-white">Working Hours</h3>
                <p className="mt-1">Mon - Sat: 8:30 AM - 7:00 PM</p>
                <p>Sun: 9:00 AM - 4:00 PM</p>
              </div>
              <div>
                <h3 className="font-bold text-white">Best for fast replies</h3>
                <p className="mt-1">Send your size, quantity, deadline and any artwork files through WhatsApp.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
