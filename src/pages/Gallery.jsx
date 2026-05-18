import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

// Import gallery images
import imgBusinessCards from '../assets/gallery/Business Card.jpeg'
import imgShopBanners from '../assets/gallery/Shop Banner.jpeg'
import imgStickers from '../assets/gallery/Sticker.jpeg'
import imgCertificates from '../assets/gallery/Certificate.jpeg'
import imgMenus from '../assets/gallery/Menu.jpeg'
import imgSpecial from '../assets/gallery/special.jpeg'

const samples = [
  { title: 'Business Cards', type: 'Premium matte finish', image: imgBusinessCards },
  { title: 'Shop Banners', type: 'Large-format outdoor print', image: imgShopBanners },
  { title: 'Sticker Sheets', type: 'Cut stickers and labels', image: imgStickers },
  { title: 'Certificates', type: 'Clean official presentation', image: imgCertificates },
  { title: 'Menus', type: 'Laminated restaurant cards', image: imgMenus },
  { title: 'Special Projects', type: 'Custom prints and bulk orders', image: imgSpecial }
]

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery - Matrix Graphics'
  }, [])

  return (
    <div className="container py-8 sm:py-10 md:py-12">
      <div className="max-w-3xl">
        <h1 className="section-title text-2xl font-bold sm:text-3xl">Portfolio</h1>
        <p className="mt-2 font-medium text-mgnavy/85">A quick look at our recent work and print quality.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((sample, index) => (
          <ScrollReveal key={sample.title} delay={`delay-${(index % 3 + 1) * 100}`} className="h-full">
            <article className="dark-panel overflow-hidden h-full flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48 w-full overflow-hidden bg-black/5 dark:bg-black/20">
                <img 
                  src={sample.image} 
                  alt={sample.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-left flex-1">
                <h2 className="font-bold text-lg">{sample.title}</h2>
                <p className="mt-1 text-sm font-semibold opacity-80">{sample.type}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
