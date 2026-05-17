import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const samples = [
  { title: 'Business Cards', type: 'Premium matte finish', className: 'gallery-business' },
  { title: 'Shop Banners', type: 'Large-format outdoor print', className: 'gallery-banner' },
  { title: 'Sticker Sheets', type: 'Cut stickers and labels', className: 'gallery-sticker' },
  { title: 'Certificates', type: 'Clean official presentation', className: 'gallery-certificate' },
  { title: 'Menus', type: 'Laminated restaurant cards', className: 'gallery-menu' },
  { title: 'Custom Gifts', type: 'Mugs, caps and apparel', className: 'gallery-gift' }
]

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery - Matrix Graphics'
  }, [])

  return (
    <div className="container py-8 sm:py-10 md:py-12">
      <div className="max-w-3xl">
        <h1 className="section-title text-2xl font-bold sm:text-3xl">Portfolio</h1>
        <p className="mt-2 font-medium text-mgnavy/85">A quick look at common print categories. Replace these samples with real customer work when you are ready.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((sample, index) => (
          <ScrollReveal key={sample.title} delay={`delay-${(index % 3 + 1) * 100}`} className="h-full">
            <article className="overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-mgyellow/20 h-full flex flex-col">
              <div className={`gallery-sample ${sample.className}`} aria-hidden="true" />
              <div className="p-4 text-left flex-1">
                <h2 className="font-bold text-white">{sample.title}</h2>
                <p className="mt-1 text-sm font-semibold text-white">{sample.type}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
